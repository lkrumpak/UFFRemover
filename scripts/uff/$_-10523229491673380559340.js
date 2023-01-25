(function(){{
    return {
        type: Syntax.StringLiteralTypeAnnotation,
        value: token.value,
        raw: source.slice(token.range[0], token.range[1])
    };
}})();