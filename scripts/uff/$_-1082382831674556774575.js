(function(){{
    if (null == b)
        c.push('null');
    else {
        if ('object' == typeof b) {
            if (t(b)) {
                var d = b;
                b = d.length;
                c.push('[');
                for (var e = '', g = 0; g < b; g++)
                    c.push(e), e = d[g], od(a, a.Db ? a.Db.call(d, String(g), e) : e, c), e = ',';
                c.push(']');
                return;
            }
            if (b instanceof String || b instanceof Number || b instanceof Boolean)
                b = b.valueOf();
            else {
                c.push('{');
                g = '';
                for (d in b)
                    Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], 'function' != typeof e && (c.push(g), qd(d, c), c.push(':'), od(a, a.Db ? a.Db.call(b, d, e) : e, c), g = ','));
                c.push('}');
                return;
            }
        }
        switch (typeof b) {
        case 'string':
            qd(b, c);
            break;
        case 'number':
            c.push(isFinite(b) && !isNaN(b) ? b : 'null');
            break;
        case 'boolean':
            c.push(b);
            break;
        case 'function':
            break;
        default:
            throw Error('Unknown type: ' + typeof b);
        }
    }
}})();