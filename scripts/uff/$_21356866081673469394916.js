(function(){{
    var index, name, easing, value, hooks;
    // camelCase, specialEasing and expand cssHook pass
    for (index in props) {
        name = jQuery.camelCase(index);
        easing = specialEasing[name];
        value = props[index];
        if (jQuery.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
        }
        if (index !== name) {
            props[name] = value;
            delete props[index];
        }
        hooks = jQuery.cssHooks[name];
        if (hooks && 'expand' in hooks) {
            value = hooks.expand(value);
            delete props[name];
            // not quite $.extend, this wont overwrite keys already present.
            // also - reusing 'index' from above because we have the correct "name"
            for (index in value) {
                if (!(index in props)) {
                    props[index] = value[index];
                    specialEasing[index] = easing;
                }
            }
        } else {
            specialEasing[name] = easing;
        }
    }
}})();