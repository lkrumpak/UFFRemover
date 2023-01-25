(function(){{
    var result = '';
    string = baseToString(string);
    n = +n;
    if (n < 1 || !string || !nativeIsFinite(n)) {
        return result;
    }
    // Leverage the exponentiation by squaring algorithm for a faster repeat.
    // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
    do {
        if (n % 2) {
            result += string;
        }
        n = nativeFloor(n / 2);
        string += string;
    } while (n);
    return result;
}})();