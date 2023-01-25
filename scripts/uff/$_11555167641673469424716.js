(function(){{
    if (byteOffset > 2147483647)
        byteOffset = 2147483647;
    else if (byteOffset < -2147483648)
        byteOffset = -2147483648;
    byteOffset >>= 0;
    if (        $that.length === 0)
        return -1;
    if (byteOffset >=        $that.length)
        return -1;
    // Negative offsets start from the end of the buffer
    if (byteOffset < 0)
        byteOffset = Math.max(        $that.length + byteOffset, 0);
    if (typeof val === 'string') {
        if (val.length === 0)
            return -1;
        // special case: looking for empty string always fails
        return String.prototype.indexOf.call(        $that, val, byteOffset);
    }
    if (Buffer.isBuffer(val)) {
        return arrayIndexOf(        $that, val, byteOffset);
    }
    if (typeof val === 'number') {
        if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
            return Uint8Array.prototype.indexOf.call(            $that, val, byteOffset);
        }
        return arrayIndexOf(        $that, [val], byteOffset);
    }
    function arrayIndexOf(arr, val, byteOffset) {
        var foundIndex = -1;
        for (var i = 0; byteOffset + i < arr.length; i++) {
            if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
                if (foundIndex === -1)
                    foundIndex = i;
                if (i - foundIndex + 1 === val.length)
                    return byteOffset + foundIndex;
            } else {
                foundIndex = -1;
            }
        }
        return -1;
    }
    throw new TypeError('val must be string, number or Buffer');
}})();