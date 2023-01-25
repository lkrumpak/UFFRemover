(function(){{
    return a ? b ? function () {
        return a.apply(window, arguments) && b.apply(window, arguments);
    } : a : b;
}})();