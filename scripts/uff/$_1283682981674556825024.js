(function(){{
    var ch, code, cu1, cu2;
    ch = source[index];
    code = 0;
    // At least, one hex digit is required.
    if (ch === '}') {
        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
    }
    while (index < length) {
        ch = source[index++];
        if (!isHexDigit(ch)) {
            break;
        }
        code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
    }
    if (code > 1114111 || ch !== '}') {
        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
    }
    // UTF-16 Encoding
    if (code <= 65535) {
        return String.fromCharCode(code);
    }
    cu1 = (code - 65536 >> 10) + 55296;
    cu2 = (code - 65536 & 1023) + 56320;
    return String.fromCharCode(cu1, cu2);
}})();