(function(){{
    var strLength = string.length;
    length = +length;
    if (strLength >= length || !nativeIsFinite(length)) {
        return '';
    }
    var padLength = length - strLength;
    chars = chars == null ? ' ' : chars + '';
    return repeat(chars, nativeCeil(padLength / chars.length)).slice(0, padLength);
}})();