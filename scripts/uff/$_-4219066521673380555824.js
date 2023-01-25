(function(){{
    e = e.replace(i, '');
    var n = e.match(c), r = (n[1].split(',')[t] || 'require').replace(f, ''), a = m[r] || (m[r] = new RegExp(l + r + u, 'g'));
    a.lastIndex = 0;
    for (var o, s = []; o = a.exec(e);)
        s.push(o[2] || o[3]);
    return s;
}})();