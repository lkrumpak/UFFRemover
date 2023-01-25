(function(){{
    utils.catchup(node.key.range[1], state);
    utils.append(':' + node.key.name, state);
    return false;
}})();