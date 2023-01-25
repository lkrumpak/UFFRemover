(function(){{
    // don't escape SafeStrings, since they're already safe
    if (string instanceof SafeString) {
        return string.toString();
    } else if (!string && string !== 0) {
        return '';
    }
    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
    if (!possible.test(string)) {
        return string;
    }
    return string.replace(badChars, escapeChar);
}})();