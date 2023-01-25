(function(){{
    if (name.indexOf('-') > -1) {
        warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
        warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
        warnStyleValueWithSemicolon(name, value);
    }
}})();