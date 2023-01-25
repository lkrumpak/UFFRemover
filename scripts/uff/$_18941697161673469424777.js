(function(){{
    if (aChar in charToIntMap) {
        return charToIntMap[aChar];
    }
    throw new TypeError('Not a valid base 64 digit: ' + aChar);
}})();