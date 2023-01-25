(function(){{
    var marker = markerCreate(), specifier;
    if (lookahead.type !== Token.StringLiteral) {
        throwError({}, Messages.InvalidModuleSpecifier);
    }
    specifier = delegate.createModuleSpecifier(lookahead);
    lex();
    return markerApply(marker, specifier);
}})();