(function(){{
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError('Arguments must be Buffers');
    }
    if (a === b)
        return 0;
    var x = a.length;
    var y = b.length;
    for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {
    }
    if (i !== len) {
        x = a[i];
        y = b[i];
    }
    if (x < y)
        return -1;
    if (y < x)
        return 1;
    return 0;
}})();