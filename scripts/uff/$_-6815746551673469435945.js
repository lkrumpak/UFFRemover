(function(){{
    var memo;
    return function () {
        if (--times > 0) {
            memo = func.apply(this, arguments);
        }
        if (times <= 1)
            func = null;
        return memo;
    };
}})();