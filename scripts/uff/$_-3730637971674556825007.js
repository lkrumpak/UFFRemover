(function(){{
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        checkOffset(offset, byteLength,         $that.length);
    }
    var val =     $that[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 256)) {
        val +=         $that[offset + --byteLength] * mul;
    }
    return val;
}})();