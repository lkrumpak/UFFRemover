(function(){{
    var tmp = pattern, value;
    if (flags.indexOf('u') >= 0) {
        // Replace each astral symbol and every Unicode code point
        // escape sequence with a single ASCII symbol to avoid throwing on
        // regular expressions that are only valid in combination with the
        // `/u` flag.
        // Note: replacing with the ASCII symbol `x` might cause false
        // negatives in unlikely scenarios. For example, `[\u{61}-b]` is a
        // perfectly valid pattern that is equivalent to `[a-b]`, but it
        // would be replaced by `[x-b]` which throws an error.
        tmp = tmp.replace(/\\u\{([0-9a-fA-F]+)\}/g, function ($0, $1) {
            if (parseInt($1, 16) <= 1114111) {
                return 'x';
            }
            throwError({}, Messages.InvalidRegExp);
        }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, 'x');
    }
    // First, detect invalid regular expressions.
    try {
        value = new RegExp(tmp);
    } catch (e) {
        throwError({}, Messages.InvalidRegExp);
    }
    // Return a regular expression object for this pattern-flag pair, or
    // `null` in case the current environment doesn't support the flags it
    // uses.
    try {
        return new RegExp(pattern, flags);
    } catch (exception) {
        return null;
    }
}})();