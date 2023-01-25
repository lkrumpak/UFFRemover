(function(){{
    if (c)
        if (8 == c.nodeType) {
            var f = a.D.Gb(c.nodeValue);
            null != f && d.push({
                bc: c,
                mc: f
            });
        } else if (1 == c.nodeType)
            for (var f = 0, h = c.childNodes, k = h.length; f < k; f++)
                b(h[f], d);
}})();