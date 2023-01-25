(function(){{
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
        checkInt(        $that, value, offset, 4, 2147483647, -2147483648);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
                $that[offset] = value;
                $that[offset + 1] = value >>> 8;
                $that[offset + 2] = value >>> 16;
                $that[offset + 3] = value >>> 24;
    } else {
        objectWriteUInt32(        $that, value, offset, true);
    }
    return offset + 4;
}})();