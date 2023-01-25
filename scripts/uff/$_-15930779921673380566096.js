(function(){{
    var i = 0;
    var strLen = aStr.length;
    var result = 0;
    var shift = 0;
    var continuation, digit;
    do {
        if (i >= strLen) {
            throw new Error('Expected more digits in base 64 VLQ value.');
        }
        digit = base64.decode(aStr.charAt(i++));
        continuation = !!(digit & VLQ_CONTINUATION_BIT);
        digit &= VLQ_BASE_MASK;
        result = result + (digit << shift);
        shift += VLQ_BASE_SHIFT;
    } while (continuation);
    return {
        value: fromVLQSigned(result),
        rest: aStr.slice(i)
    };
}})();