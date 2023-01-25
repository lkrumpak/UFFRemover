(function(){{
    if (!noAssert)
        checkOffset(offset, 2,         $that.length);
    var val =     $that[offset + 1] |    $that[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
}})();