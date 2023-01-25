(function(){{
    return _getClosest(item, array, function (comparedItem, item) {
        return comparedItem - item;
    });
}})();