(function(){{
    var marker = markerCreate(), type, types;
    type = parseIntersectionType();
    types = [type];
    while (match('|')) {
        lex();
        types.push(parseIntersectionType());
    }
    return types.length === 1 ? type : markerApply(marker, delegate.createUnionTypeAnnotation(types));
}})();