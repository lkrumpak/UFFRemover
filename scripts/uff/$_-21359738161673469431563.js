(function(){{
    utils.append(utils.getTempVar(getParamIndex(node, path)), state);
    utils.catchupWhiteSpace(node.range[1], state);
    return true;
}})();