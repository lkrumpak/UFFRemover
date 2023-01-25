(function(){{
    n !== !0 && (n = !1);
    var r = null;
    if (n) {
                $that.content[e] == null && (        $that.content[e] = {});
        var r =         $that.content[e][t];
        r == null && (r = {
            status:             $that.STATUS_NEW,
            value: null
        },         $that.content[e][t] = r);
    } else
                $that.content[e] != null && (r =         $that.content[e][t]);
    return r;
}})();