(function(){{
    if (!noAssert)
        checkOffset(offset, 2,         $that.length);
    return    $that[offset] << 8 |    $that[offset + 1];
}})();