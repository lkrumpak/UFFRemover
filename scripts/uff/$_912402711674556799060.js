(function(){{
    id = makeModuleMap(id, relMap, false, true).id;
    return hasProp(defined, id) || hasProp(registry, id);
}})();