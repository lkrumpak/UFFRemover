(function(){{
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
        checkInt(        $that, value, offset, 4, 2147483647, -2147483648);
    if (value < 0)
        value = 4294967295 + value + 1;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
                $that[offset] = value >>> 24;
                $that[offset + 1] = value >>> 16;
                $that[offset + 2] = value >>> 8;
                $that[offset + 3] = value;
    } else {
        objectWriteUInt32(        $that, value, offset, false);
    }
    return offset + 4;
}})();