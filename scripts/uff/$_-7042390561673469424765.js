(function(){{
    return {
        type: Syntax.ModuleSpecifier,
        value: token.value,
        raw: source.slice(token.range[0], token.range[1])
    };
}})();