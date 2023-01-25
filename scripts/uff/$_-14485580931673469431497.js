(function(){{
    if (value < 0)
        value = 4294967295 + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
        buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
    }
}})();