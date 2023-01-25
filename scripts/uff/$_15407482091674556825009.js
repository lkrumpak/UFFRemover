(function(){{
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert)
        checkInt(        $that, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);
    var mul = 1;
    var i = 0;
        $that[offset] = value & 255;
    while (++i < byteLength && (mul *= 256)) {
                $that[offset + i] = value / mul >>> 0 & 255;
    }
    return offset + byteLength;
}})();