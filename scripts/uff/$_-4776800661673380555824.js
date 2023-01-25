(function(){{
    if ('object' == typeof e && !(e instanceof Array))
        return r.apply(null, Array.prototype.splice.call(arguments, 1, arguments.length - 1));
    if ('string' == typeof e && 'function' == typeof t && (e = [e]), !(e instanceof Array)) {
        if ('string' == typeof e) {
            var o = s.get(s.normalizeSync(e, a));
            if (!o)
                throw new Error('Module not already loaded loading "' + e + '" from "' + a + '".');
            return o.__useDefault ? o['default'] : o;
        }
        throw new TypeError('Invalid require');
    }
    for (var i = [], l = 0; l < e.length; l++)
        i.push(s['import'](e[l], a));
    Promise.all(i).then(function (e) {
        t && t.apply(null, e);
    }, n);
}})();