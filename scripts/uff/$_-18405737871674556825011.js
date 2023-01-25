(function(){{
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        checkInt(        $that, value, offset, byteLength, Math.pow(2, 8 * byteLength - 1) - 1, -Math.pow(2, 8 * byteLength - 1));
    }
    var i = 0;
    var mul = 1;
    var sub = value < 0 ? 1 : 0;
        $that[offset] = value & 255;
    while (++i < byteLength && (mul *= 256)) {
                $that[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength;
}})();