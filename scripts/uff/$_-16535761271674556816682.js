(function(){{
    var ancestor, query;
    ancestor = component.root;
    while (ancestor) {
        if (query = ancestor._liveComponentQueries[component.name]) {
            query.push(component.instance);
        }
        ancestor = ancestor._parent;
    }
}})();