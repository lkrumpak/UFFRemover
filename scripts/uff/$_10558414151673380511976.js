(function(){{
    handlers[prop] = function (ev, newVal) {
        // check that this property is not being changed because
        // it's source value just changed
        if (scopePropertyUpdating !== prop) {
            computeData.compute(newVal);
        }
    };
    componentScope.bind(prop, handlers[prop]);
}})();