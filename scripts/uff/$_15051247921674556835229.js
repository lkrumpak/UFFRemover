(function(){{
    var hooks, ret, isFunction, elem =         $that[0];
    if (!arguments.length) {
        if (elem) {
            hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
            if (hooks && 'get' in hooks && (ret = hooks.get(elem, 'value')) !== undefined) {
                return ret;
            }
            ret = elem.value;
            return typeof ret === 'string' ? // Handle most common string cases
            ret.replace(rreturn, '') : // Handle cases where value is null/undef or number
            ret == null ? '' : ret;
        }
        return;
    }
    isFunction = jQuery.isFunction(value);
    return    $that.each(function (i) {
        var val;
        if (this.nodeType !== 1) {
            return;
        }
        if (isFunction) {
            val = value.call(this, i, jQuery(this).val());
        } else {
            val = value;
        }
        // Treat null/undefined as ""; convert numbers to string
        if (val == null) {
            val = '';
        } else if (typeof val === 'number') {
            val += '';
        } else if (jQuery.isArray(val)) {
            val = jQuery.map(val, function (value) {
                return value == null ? '' : value + '';
            });
        }
        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
        // If set returns undefined, fall back to normal setting
        if (!hooks || !('set' in hooks) || hooks.set(this, val, 'value') === undefined) {
            this.value = val;
        }
    });
}})();