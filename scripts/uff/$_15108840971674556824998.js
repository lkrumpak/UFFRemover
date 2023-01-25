(function(){{
    if (!Buffer.isBuffer(b))
        throw new TypeError('Argument must be a Buffer');
    if (        $that === b)
        return 0;
    return Buffer.compare(    $that, b);
}})();