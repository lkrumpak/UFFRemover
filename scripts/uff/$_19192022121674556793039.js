(function(){{
    // Firefox < 21 and Opera < 15 follow ES3 for `parseInt`.
    // Chrome fails to trim leading <BOM> whitespace characters.
    // See https://code.google.com/p/v8/issues/detail?id=3109 for more details.
    if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
        radix = 0;
    } else if (radix) {
        radix = +radix;
    }
    string = trim(string);
    return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
}})();