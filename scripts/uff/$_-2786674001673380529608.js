(function(){{
    return access(    $that, function (elem, method, val) {
        var win = getWindow(elem);
        if (val === undefined) {
            return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
        }
        if (win) {
            win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
        } else {
            elem[method] = val;
        }
    }, method, val, arguments.length, null);
}})();