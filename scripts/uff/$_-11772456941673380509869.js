(function(){{
    var i = t, s = r || /\s/, o;
    while (i < n) {
        o = e.charAt(i);
        if (s.test(o))
            return i;
        i++;
    }
    return -1;
}})();