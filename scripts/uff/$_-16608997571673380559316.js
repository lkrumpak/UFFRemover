(function(){{
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
        checkInt(        $that, value, offset, 1, 127, -128);
    if (!Buffer.TYPED_ARRAY_SUPPORT)
        value = Math.floor(value);
    if (value < 0)
        value = 255 + value + 1;
        $that[offset] = value;
    return offset + 1;
}})();