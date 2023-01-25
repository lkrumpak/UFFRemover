(function(){{
    var tempVar = '$__' + state.localScope.tempVarIndex++;
    state.localScope.tempVars.push(tempVar);
    return tempVar;
}})();