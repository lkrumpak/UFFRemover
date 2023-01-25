(function(){{
    var oldInType = state.inType, type;
    state.inType = true;
    type = parseUnionType();
    state.inType = oldInType;
    return type;
}})();