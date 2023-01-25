(function(){{
    if (!noAssert)
        checkOffset(offset, 4,         $that.length);
    return    $that[offset] * 16777216 + (    $that[offset + 1] << 16 |    $that[offset + 2] << 8 |    $that[offset + 3]);
}})();