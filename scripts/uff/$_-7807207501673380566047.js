(function(){{
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert)
        checkOffset(offset, byteLength,         $that.length);
    var i = byteLength;
    var mul = 1;
    var val =     $that[offset + --i];
    while (i > 0 && (mul *= 256)) {
        val +=         $that[offset + --i] * mul;
    }
    mul *= 128;
    if (val >= mul)
        val -= Math.pow(2, 8 * byteLength);
    return val;
}})();