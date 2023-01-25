(function(){{
    if (!noAssert)
        checkOffset(offset, 1,         $that.length);
    if (!(        $that[offset] & 128))
        return        $that[offset];
    return (255 -    $that[offset] + 1) * -1;
}})();