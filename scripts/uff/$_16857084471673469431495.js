(function(){{
    if (!noAssert)
        checkOffset(offset, 4,         $that.length);
    return    $that[offset] |    $that[offset + 1] << 8 |    $that[offset + 2] << 16 |    $that[offset + 3] << 24;
}})();