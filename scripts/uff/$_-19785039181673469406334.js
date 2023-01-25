(function(){{
    function b(a) {
        a.sort();
        var b = null, c = [];
        for (var d = 0; d < a.length; d++)
            a[d] !== b && (c.push(a[d]), b = a[d]);
        switch (c.length) {
        case 0:
            return 'end of input';
        case 1:
            return c[0];
        default:
            return c.slice(0, c.length - 1).join(', ') + ' or ' + c[c.length - 1];
        }
    }
    var c = b(g), e = Math.max(d, f), h = e < a.length ? k(a.charAt(e)) : 'end of input';
    return 'Expected ' + c + ' but ' + h + ' found.';
}})();