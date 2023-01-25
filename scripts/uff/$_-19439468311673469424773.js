(function(){{
    var computed = false, generator = false, key, marker = markerCreate(), isStatic = false, possiblyOpenBracketToken;
    if (match(';')) {
        lex();
        return undefined;
    }
    if (lookahead.value === 'static') {
        lex();
        isStatic = true;
    }
    if (match('*')) {
        lex();
        generator = true;
    }
    possiblyOpenBracketToken = lookahead;
    if (matchContextualKeyword('get') || matchContextualKeyword('set')) {
        possiblyOpenBracketToken = lookahead2();
    }
    if (possiblyOpenBracketToken.type === Token.Punctuator && possiblyOpenBracketToken.value === '[') {
        computed = true;
    }
    key = parseObjectPropertyKey();
    if (!generator && lookahead.value === ':') {
        return markerApply(marker, parseClassProperty(key, computed, isStatic));
    }
    return markerApply(marker, parseMethodDefinition(key, isStatic, generator, computed));
}})();