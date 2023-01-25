(function(){{
    if (G)
        return a = Kc(a.pb), a.body ? decodeURIComponent(a.body.innerHTML.replace(/\+/g, ' ')) : null;
    var b = a.pb.contentWindow;
    if (b) {
        var c;
        try {
            c = decodeURIComponent(dd(b).replace(/\+/g, ' '));
        } catch (d) {
            return a.Fa || (1 != a.Fa && a.l.setInterval(gd), a.Fa = !0), null;
        }
        a.Fa && (0 != a.Fa && a.l.setInterval(Xc), a.Fa = !1);
        return c || null;
    }
    return null;
}})();