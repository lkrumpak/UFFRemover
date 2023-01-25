(function(){{
    return _getClosest(item, array, function (comparedItem, item) {
        return Math.abs(comparedItem - item);
    });
}})();