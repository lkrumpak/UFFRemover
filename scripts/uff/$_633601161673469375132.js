(function(){{
    var n;
    for (var r = 0, i = e.length; r < i; r++) {
        if (t === 'OS') {
            n =             $that.__checkNavigator(e[r].pattern,             $that.ua);
            if (n) {
                                $that.__setOs(n, r);
                break;
            }
        }
        if (t === 'BROWSER') {
            n =             $that.__checkNavigator(e[r].pattern,             $that.ua);
            if (n) {
                                $that.__setBrowser(n, r);
                break;
            }
        }
        if (t === 'DEVICE') {
            n =             $that.__checkNavigator(e[r].pattern,             $that.ua);
            if (n) {
                                $that.__setDevice(n);
                break;
            }
        }
    }
}})();