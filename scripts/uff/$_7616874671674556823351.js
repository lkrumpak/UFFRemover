(function(){{
    if (children == null) {
        return children;
    }
    var mapResult = {};
    var traverseContext = MapBookKeeping.getPooled(mapResult, func, context);
    traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
    MapBookKeeping.release(traverseContext);
    return ReactFragment.create(mapResult);
}})();