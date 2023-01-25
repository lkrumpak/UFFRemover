(function(){{
    var currScope = state.localScope;
    while (currScope) {
        if (currScope.identifiers[identName] !== undefined) {
            return currScope.identifiers[identName];
        }
        currScope = currScope.parentScope;
    }
}})();