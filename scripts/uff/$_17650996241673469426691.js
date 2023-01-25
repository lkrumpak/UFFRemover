(function(){{
    var _this2 =     $that;
    fn.eachObject(function (methodName, value) {
        if (!fn.isFunction(value)) {
            throw new TypeError('exportPublicMethods expects a function');
        }
        _this2.publicMethods[methodName] = value;
    }, [methods]);
}})();