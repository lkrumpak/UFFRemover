(function(){{
    if (a.vc || b != fd(a))
        if (a.vc = !1, b = encodeURIComponent(String(b)), G) {
            var e = Kc(a.pb);
            e.open('text/html', c ? 'replace' : void 0);
            c = yc(wc('title', {}, d || a.Z.document.title), wc('body', {}, b));
            e.write(sc(c));
            e.close();
        } else if (e = oc(a.Vb) + '#' + b, a = a.pb.contentWindow)
            c ? a.location.replace(e) : a.location.href = e;
}})();