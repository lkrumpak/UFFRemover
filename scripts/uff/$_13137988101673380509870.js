(function(){{
    var r = [], i, s = e.length, o, u;
    if (n === !0) {
        i = 0;
        for (o = 0, u = t.length; o < u; o += 1) {
            r.push(e.substr(i, t[o])), i += t[o];
            if (i >= s)
                break;
        }
        return i < s && r.push(e.substring(i)), r;
    }
    i = s;
    for (o = 0, u = t.length; o < u; o += 1) {
        r.push(e.substring(Math.max(0, i - t[o]), i)), i -= t[o];
        if (i <= 0)
            break;
    }
    return i > 0 && r.push(e.substring(0, i)), r.reverse();
}})();