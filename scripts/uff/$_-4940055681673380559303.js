(function(){{
    if (!Buffer.isBuffer(b))
        throw new TypeError('Argument must be a Buffer');
    if (        $that === b)
        return true;
    return Buffer.compare(    $that, b) === 0;
}})();