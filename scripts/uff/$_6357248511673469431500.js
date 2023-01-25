(function(){{
    if (value > max || value < min)
        throw new RangeError('value is out of bounds');
    if (offset + ext > buf.length)
        throw new RangeError('index out of range');
    if (offset < 0)
        throw new RangeError('index out of range');
}})();