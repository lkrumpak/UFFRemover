(function(){{
    if (typeof Uint8Array !== 'undefined') {
        if (Buffer.TYPED_ARRAY_SUPPORT) {
            return new Buffer(            $that).buffer;
        } else {
            var buf = new Uint8Array(            $that.length);
            for (var i = 0, len = buf.length; i < len; i += 1) {
                buf[i] =                 $that[i];
            }
            return buf.buffer;
        }
    } else {
        throw new TypeError('Buffer.toArrayBuffer not supported in this browser');
    }
}})();