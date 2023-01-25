(function(){{
    return _getClosest(item, array, function (comparedItem, item) {
        return item - comparedItem;
    });
}})();