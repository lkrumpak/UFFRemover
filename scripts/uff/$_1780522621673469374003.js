(function(){{
    var d =         $that.ha, e = arguments, g = e[0], h = e[1];
    if (!ac && h && (h.name || h.type)) {
        g = [
            '<',
            g
        ];
        h.name && g.push(' name="', sa(h.name), '"');
        if (h.type) {
            g.push(' type="', sa(h.type), '"');
            var k = {};
            gb(k, h);
            delete k.type;
            h = k;
        }
        g.push('>');
        g = g.join('');
    }
    g = d.createElement(g);
    h && (u(h) ? g.className = h : t(h) ? g.className = h.join(' ') : Dc(g, h));
    2 < e.length && Fc(d, g, e, 2);
    return g;
}})();