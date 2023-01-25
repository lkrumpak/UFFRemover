(function(){{
    var n, s, a, f, l = r, c, h = t[e];
    h && typeof h.toJSON == 'function' && (h = h.toJSON(e));
    switch (typeof h) {
    case 'string':
        return o(h);
    case 'number':
        return isFinite(h) ? String(h) : 'null';
    case 'boolean':
    case 'null':
        return String(h);
    case 'object':
        if (!h)
            return 'null';
        r += i, c = [];
        if (Object.prototype.toString.apply(h) === '[object Array]') {
            f = h.length;
            if (i) {
                for (n = 0; n < f; n += 1)
                    c[n] = u(n, h) || 'null';
                a = c.length === 0 ? '[]' : r ? '[\n' + r + c.join(',\n' + r) + '\n' + l + ']' : '[' + c.join(',') + ']', r = l;
            } else {
                c.push('[');
                for (n = 0; n < f; n += 1)
                    n !== 0 && c.push(','), c.push(u(n, h) || 'null');
                c.push(']'), a = c.join('');
            }
            return a;
        }
        if (i) {
            for (s in h)
                Object.prototype.hasOwnProperty.call(h, s) && (a = u(s, h), a && c.push(o(s) + (r ? ': ' : ':') + a));
            a = c.length === 0 ? '{}' : r ? '{\n' + r + c.join(',\n' + r) + '\n' + l + '}' : '{' + c.join(',') + '}', r = l;
        } else {
            var p = !1;
            c.push('{');
            for (s in h)
                Object.prototype.hasOwnProperty.call(h, s) && (a = u(s, h), a && (p && (c[c.length] = ','), c.push(o(s), ':', a), p = !0));
            c.push('}'), a = c.join('');
        }
        return a;
    }
}})();