(function(){{
    name = jQuery.propFix[name] || name;
    return    $that.each(function () {
        // try/catch handles cases where IE balks (such as removing a property on window)
        try {
            this[name] = undefined;
            delete this[name];
        } catch (e) {
        }
    });
}})();