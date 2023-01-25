(function(){{
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
        checkInt(        $that, value, offset, 1, 255, 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT)
        value = Math.floor(value);
        $that[offset] = value;
    return offset + 1;
}})();