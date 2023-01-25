(function(){{
    if (!start)
        start = 0;
    if (!end && end !== 0)
        end =         $that.length;
    if (target_start >= target.length)
        target_start = target.length;
    if (!target_start)
        target_start = 0;
    if (end > 0 && end < start)
        end = start;
    // Copy 0 bytes; we're done
    if (end === start)
        return 0;
    if (target.length === 0 ||        $that.length === 0)
        return 0;
    // Fatal error conditions
    if (target_start < 0) {
        throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >=        $that.length)
        throw new RangeError('sourceStart out of bounds');
    if (end < 0)
        throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end >        $that.length)
        end =         $that.length;
    if (target.length - target_start < end - start) {
        end = target.length - target_start + start;
    }
    var len = end - start;
    if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < len; i++) {
            target[i + target_start] =             $that[i + start];
        }
    } else {
        target._set(        $that.subarray(start, start + len), target_start);
    }
    return len;
}})();