(function(){{
    // To preserve inline typechecking directives, we
    // distinguish between parens-free and paranthesized single param.
    if (isParensFreeSingleParam(node, state) || !node.params.length) {
        utils.append('(', state);
    }
    if (node.params.length !== 0) {
        path.unshift(node);
        traverse(node.params, path, state);
        path.unshift();
    }
    utils.append(')', state);
}})();