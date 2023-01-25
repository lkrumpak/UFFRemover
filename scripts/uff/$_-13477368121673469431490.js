(function(){{
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
        length = remaining;
    } else {
        length = Number(length);
        if (length > remaining) {
            length = remaining;
        }
    }
    // must be an even number of digits
    var strLen = string.length;
    if (strLen % 2 !== 0)
        throw new Error('Invalid hex string');
    if (length > strLen / 2) {
        length = strLen / 2;
    }
    for (var i = 0; i < length; i++) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed))
            throw new Error('Invalid hex string');
        buf[offset + i] = parsed;
    }
    return i;
}})();