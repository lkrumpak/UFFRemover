(function(){{
    var specifiers = [];
    // {foo, bar as bas}
    expect('{');
    if (!match('}')) {
        do {
            specifiers.push(parseImportSpecifier());
        } while (match(',') && lex());
    }
    expect('}');
    return specifiers;
}})();