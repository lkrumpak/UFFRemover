(function(){{
    var len =     $that.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0)
            start = 0;
    } else if (start > len) {
        start = len;
    }
    if (end < 0) {
        end += len;
        if (end < 0)
            end = 0;
    } else if (end > len) {
        end = len;
    }
    if (end < start)
        end = start;
    var newBuf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        newBuf = Buffer._augment(        $that.subarray(start, end));
    } else {
        var sliceLen = end - start;
        newBuf = new Buffer(sliceLen, undefined);
        for (var i = 0; i < sliceLen; i++) {
            newBuf[i] =             $that[i + start];
        }
    }
    if (newBuf.length)
        newBuf.parent =         $that.parent ||        $that;
    return newBuf;
}})();