(function(){{
    jQuery.attrHooks[name] = {
        set: function (elem, value) {
            if (value === '') {
                elem.setAttribute(name, 'auto');
                return value;
            }
        }
    };
}})();