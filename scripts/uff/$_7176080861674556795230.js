(function(){{
    jQuery.propHooks[name] = {
        get: function (elem) {
            return elem.getAttribute(name, 4);
        }
    };
}})();