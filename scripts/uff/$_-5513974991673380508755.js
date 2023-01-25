(function(){{
    var c = r(a), d = c ? a.toString() : '', e = r(b);
    return db(    $that.w, function (a) {
        for (var h = 0; h < a.length; ++h)
            if (!(c && a[h].type != d || e && a[h].Oa != b))
                return !0;
        return !1;
    });
}})();