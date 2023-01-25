(function(){{
    var once = false;
    return function () {
        if (once)
            return;
        once = true;
        return route.apply(this, arguments);
    };
}})();