(function(){{
    var r = [], i, s = e.length;
    if (t < 1 || t >= s)
        return [e];
    if (t === 1)
        return e.split('');
    if (n === !0) {
        i = 0;
        while (i < s)
            r.push(e.substr(i, t)), i += t;
        return r;
    }
    i = s;
    while (i > 0)
        r.push(e.substring(Math.max(0, i - t), i)), i -= t;
    return r.reverse();
}})();