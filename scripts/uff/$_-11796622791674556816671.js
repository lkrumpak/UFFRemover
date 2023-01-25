(function(){{
    var hyphenated;
    if (vendorPattern.test(str)) {
        str = '-' + str;
    }
    hyphenated = str.replace(/[A-Z]/g, function (match) {
        return '-' + match.toLowerCase();
    });
    return hyphenated;
}})();