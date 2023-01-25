(function(){{
    return t.replace(ce, '').replace(ae, function (t, n, r) {
        return n + ' ' + r.split(/\s*,\s*/g).map(function (t) {
            var n = t.trim();
            var r = (/:scope/.test(n) ? '' : ' ') + n.replace(/:scope/, '');
            return n[0] == '@' || n == 'from' || n == 'to' || /%$/.test(n) ? n : e + r + ', [riot-tag="' + e + '"]' + r;
        }).join(',');
    }).trim();
}})();