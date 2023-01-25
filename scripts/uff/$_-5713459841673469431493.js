(function(){{
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert)
        checkOffset(offset, byteLength,         $that.length);
    var val =     $that[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 256)) {
        val +=         $that[offset + i] * mul;
    }
    return val;
}})();