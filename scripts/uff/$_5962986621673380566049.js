(function(){{
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
        checkInt(        $that, value, offset, 2, 65535, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
                $that[offset] = value >>> 8;
                $that[offset + 1] = value;
    } else {
        objectWriteUInt16(        $that, value, offset, false);
    }
    return offset + 2;
}})();