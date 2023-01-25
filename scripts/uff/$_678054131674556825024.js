(function(){{
    var i, len, ch, code = 0;
    len = prefix === 'u' ? 4 : 2;
    for (i = 0; i < len; ++i) {
        if (index < length && isHexDigit(source[index])) {
            ch = source[index++];
            code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
        } else {
            return '';
        }
    }
    return String.fromCharCode(code);
}})();