(function(){{
    return function (method) {
        return function () {
            method.apply(_this, arguments);
            return true;
        };
    };
}})();