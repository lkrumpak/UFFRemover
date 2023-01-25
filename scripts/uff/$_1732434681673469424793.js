(function(){{
    utils.catchup(node.range[0] + node.name.length, state);
    utils.catchupWhiteOut(node.range[1], state);
    return false;
}})();