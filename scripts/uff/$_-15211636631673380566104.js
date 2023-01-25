(function(){{
    return !!state.methodFuncNode && !utils.getDocblock(state).hasOwnProperty('preventMunge') && /^_(?!_)/.test(node.name);
}})();