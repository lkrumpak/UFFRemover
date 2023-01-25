(function(){{
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
        chr = next();
        if (isStringStart(chr)) {
            parseString(chr);
            continue;
        }
        if (chr === 91) {
            inBracket++;
        }
        if (chr === 93) {
            inBracket--;
        }
        if (inBracket === 0) {
            expressionEndPos = index$1;
            break;
        }
    }
}})();