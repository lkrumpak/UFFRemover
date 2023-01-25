(function(){{
    return function () {
        var b, m, f, i = 0, step = 1;
        if (_14b) {
            i = _14a.length - 1;
            step = -1;
        }
        for (; b = _14a[i]; i += step) {
            m = b._meta;
            f = (m ? m.hidden : b.prototype)[name];
            if (f) {
                f.apply(this, arguments);
            }
        }
    };
}})();