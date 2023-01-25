(function(){{
    if (m === p) {
        k();
        if (!b)
            throw Error('Unknown component \'' + f + '\'');
        var c = b.template;
        if (!c)
            throw Error('Component \'' + f + '\' has no template');
        c = a.a.ia(c);
        a.f.T(d, c);
        var c = q, e = b.createViewModel;
        b = e ? e.call(b, c, { element: d }) : c;
        c = h.createChildContext(b);
        g = b;
        a.Ca(c, d);
    }
}})();