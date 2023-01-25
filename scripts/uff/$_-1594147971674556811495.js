(function(){{
    var r = new L(e, {
            root: t,
            parent: n
        }, t.innerHTML), i = S(t), o = O(n), u;
    r.parent = o;
    u = o.tags[i];
    if (u) {
        if (!d(u))
            o.tags[i] = [u];
        if (!~o.tags[i].indexOf(r))
            o.tags[i].push(r);
    } else {
        o.tags[i] = r;
    }
    t.innerHTML = '';
    return r;
}})();