(function(){{
    if (!Buffer.isBuffer(buf))
        throw new TypeError('buffer must be a Buffer instance');
    if (value > max || value < min)
        throw new RangeError('value is out of bounds');
    if (offset + ext > buf.length)
        throw new RangeError('index out of range');
}})();