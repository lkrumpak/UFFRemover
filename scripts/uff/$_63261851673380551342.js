(function(){{
    var ancestry, ancestor;
    ancestry = [item];
    ancestor = getParent(item);
    while (ancestor) {
        ancestry.push(ancestor);
        ancestor = getParent(ancestor);
    }
    return ancestry;
}})();