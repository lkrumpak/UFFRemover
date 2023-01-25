(function(){{
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
        checkInt(        $that, value, offset, 2, 32767, -32768);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
                $that[offset] = value;
                $that[offset + 1] = value >>> 8;
    } else {
        objectWriteUInt16(        $that, value, offset, true);
    }
    return offset + 2;
}})();