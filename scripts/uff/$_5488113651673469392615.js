(function(){{
    if (leadingChar) {
        chr = regexpEscapes[chr];
    } else if (whitespaceChar) {
        chr = stringEscapes[chr];
    }
    return '\\' + chr;
}})();