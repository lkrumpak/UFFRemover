(function(){{
    b = h(b);
    if ('string' === typeof d)
        g(a.a.ba(d));
    else if (d instanceof Array)
        g(d);
    else if (e(d))
        g(a.a.S(d.childNodes));
    else if (d.element)
        if (d = d.element, v.HTMLElement ? d instanceof HTMLElement : d && d.tagName && 1 === d.nodeType)
            g(c(d));
        else if ('string' === typeof d) {
            var f = y.getElementById(d);
            f ? g(c(f)) : b('Cannot find element with ID ' + d);
        } else
            b('Unknown element type: ' + d);
    else
        b('Unknown template value: ' + d);
}})();