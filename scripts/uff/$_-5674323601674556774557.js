(function(){{
    var c = b.type;
    if (!(c in a.w))
        return !1;
    var d = Ra(a.w[c], b);
    d && (Hb(b), 0 == a.w[c].length && (delete a.w[c], a.bb--));
    return d;
}})();