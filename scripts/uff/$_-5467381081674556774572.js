(function(){{
    function b() {
        0 <= n && (q.id = c(n, w).replace(/\\/g, ''), n = -1);
        if (0 <= p) {
            var a = p == w ? null : c(p, w);
            0 > '>~+'.indexOf(a) ? q.tag = a : q.yb = a;
            p = -1;
        }
        0 <= m && (q.V.push(c(m + 1, w).replace(/\\/g, '')), m = -1);
    }
    function c(b, d) {
        return ra(a.slice(b, d));
    }
    a = 0 <= '>~+'.indexOf(a.slice(-1)) ? a + ' * ' : a + ' ';
    for (var d = [], e = -1, g = -1, h = -1, k = -1, m = -1, n = -1, p = -1, x = '', v = '', N, w = 0, T = a.length, q = null, F = null; x = v, v = a.charAt(w), w < T; w++)
        '\\' != x && (q || (N = w, q = {
            Ga: null,
            ra: [],
            gb: [],
            V: [],
            tag: null,
            yb: null,
            id: null,
            Rb: function () {
                return Da ? this.Zc : this.tag;
            }
        }, p = w), 0 <= e ? ']' == v ? (F.Jb ? F.$b = c(h || e + 1, w) : F.Jb = c(e + 1, w), !(e = F.$b) || '"' != e.charAt(0) && '\'' != e.charAt(0) || (F.$b = e.slice(1, -1)), q.gb.push(F), F = null, e = h = -1) : '=' == v && (h = 0 <= '|~^$*'.indexOf(x) ? x : '', F.type = h + v, F.Jb = c(e + 1, w - h.length), h = w + 1) : 0 <= g ? ')' == v && (0 <= k && (F.value = c(g + 1, w)), k = g = -1) : '#' == v ? (b(), n = w + 1) : '.' == v ? (b(), m = w) : ':' == v ? (b(), k = w) : '[' == v ? (b(), e = w, F = {}) : '(' == v ? (0 <= k && (F = {
            name: c(k + 1, w),
            value: null
        }, q.ra.push(F)), g = w) : ' ' == v && x != v && (b(), 0 <= k && q.ra.push({ name: c(k + 1, w) }), q.pc = q.ra.length || q.gb.length || q.V.length, q.bd = q.Ga = c(N, w), q.Zc = q.tag = q.yb ? null : q.tag || '*', q.tag && (q.tag = q.tag.toUpperCase()), d.length && d[d.length - 1].yb && (q.nc = d.pop(), q.Ga = q.nc.Ga + ' ' + q.Ga), d.push(q), q = null));
    return d;
}})();