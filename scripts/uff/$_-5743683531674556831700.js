(function(){{
    if (!noAssert)
        checkOffset(offset, 2,         $that.length);
    return    $that[offset] |    $that[offset + 1] << 8;
}})();