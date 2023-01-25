(function(){{
    return {
        type: Syntax.ExportDeclaration,
        'default': !!isDefault,
        declaration: declaration,
        specifiers: specifiers,
        source: src
    };
}})();