(function(){{
    if (util.isString(s)) {
        return s.length < n ? s : s.slice(0, n);
    } else {
        return s;
    }
}})();