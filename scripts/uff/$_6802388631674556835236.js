(function(){{
    return access(    $that, function (elem, method, val) {
        var win = getWindow(elem);
        if (val === undefined) {
            return win ? win[prop] : elem[method];
        }
        if (win) {
            win.scrollTo(!top ? val : window.pageXOffset, top ? val : window.pageYOffset);
        } else {
            elem[method] = val;
        }
    }, method, val, arguments.length, null);
}})();