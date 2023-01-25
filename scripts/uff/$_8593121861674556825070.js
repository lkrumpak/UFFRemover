(function(){{
    traverse(node.body, path, state);
    utils.catchup(node.body.range[1], state);
}})();