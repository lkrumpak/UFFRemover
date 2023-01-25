(function(){{
    if (!noAssert)
        checkOffset(offset, 2,         $that.length);
    var val =     $that[offset] |    $that[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
}})();