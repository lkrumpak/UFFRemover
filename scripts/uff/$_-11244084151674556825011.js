(function(){{
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
        checkInt(        $that, value, offset, 4, 4294967295, 0);
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