(function(){{
    return jQuery.grep(jQuery.timers, function (fn) {
        return elem === fn.elem;
    }).length;
}})();