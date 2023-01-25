(function(){{
    if (!value)
        value = 0;
    if (!start)
        start = 0;
    if (!end)
        end =         $that.length;
    if (end < start)
        throw new RangeError('end < start');
    // Fill 0 bytes; we're done
    if (end === start)
        return;
    if (        $that.length === 0)
        return;
    if (start < 0 || start >=        $that.length)
        throw new RangeError('start out of bounds');
    if (end < 0 || end >        $that.length)
        throw new RangeError('end out of bounds');
    var i;
    if (typeof value === 'number') {
        for (i = start; i < end; i++) {
                        $that[i] = value;
        }
    } else {
        var bytes = utf8ToBytes(value.toString());
        var len = bytes.length;
        for (i = start; i < end; i++) {
                        $that[i] = bytes[i % len];
        }
    }
    return    $that;
}})();