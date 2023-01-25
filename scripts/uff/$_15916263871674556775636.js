(function(){{
    var i, s;
    if (r === !0) {
        for (i = 0, s = e.length - t; i < s; i += 1)
            if (e.charAt(i) !== n)
                break;
        return e.substring(i);
    }
    for (i = e.length - 1; i >= t; i -= 1)
        if (e.charAt(i) !== n)
            break;
    return e.substring(0, i + 1);
}})();