(function(){{
    var code = elt.charCodeAt(0);
    if (code === PLUS || code === PLUS_URL_SAFE)
        return 62;
    // '+'
    if (code === SLASH || code === SLASH_URL_SAFE)
        return 63;
    // '/'
    if (code < NUMBER)
        return -1;
    //no match
    if (code < NUMBER + 10)
        return code - NUMBER + 26 + 26;
    if (code < UPPER + 26)
        return code - UPPER;
    if (code < LOWER + 26)
        return code - LOWER + 26;
}})();