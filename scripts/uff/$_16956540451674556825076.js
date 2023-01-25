(function(){{
    return node.type === Syntax.Property && node.kind === 'init' && node.shorthand === true && path[0].type !== Syntax.ObjectPattern;
}})();