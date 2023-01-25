(function(){{
    q = q || {};
    var p = b && c(b), p = p && p.ownerDocument, n = q.templateEngine || h;
    a.fb.ec(f, n, p);
    f = n.renderTemplate(f, k, q, p);
    if ('number' != typeof f.length || 0 < f.length && 'number' != typeof f[0].nodeType)
        throw Error('Template engine must return an array of DOM nodes');
    p = !1;
    switch (e) {
    case 'replaceChildren':
        a.f.T(b, f);
        p = !0;
        break;
    case 'replaceNode':
        a.a.Lb(b, f);
        p = !0;
        break;
    case 'ignoreTargetNode':
        break;
    default:
        throw Error('Unknown renderMode: ' + e);
    }
    p && (d(f, k), q.afterRender && a.k.B(q.afterRender, null, [
        f,
        k.$data
    ]));
    return f;
}})();