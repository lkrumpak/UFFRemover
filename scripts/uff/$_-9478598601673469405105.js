(function(){{
    var memo;
    return function () {
        if (--times > 0) {
            memo = func.apply(this, arguments);
        } else {
            func = null;
        }
        return memo;
    };
}})();