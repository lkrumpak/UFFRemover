(function(){{
    utils.move(node.range[0], state);
    traverse(node, path, state);
    utils.catchup(node.range[1], state);
}})();