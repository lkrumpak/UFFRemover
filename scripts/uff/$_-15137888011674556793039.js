(function(){{
    // Reset `lastIndex` because in IE < 9 `String#replace` does not.
    string = baseToString(string);
    return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
}})();