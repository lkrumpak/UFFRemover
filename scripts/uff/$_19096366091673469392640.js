(function(){{
    indexes = baseFlatten(indexes);
    var result = baseAt(array, indexes);
    basePullAt(array, indexes.sort(baseCompareAscending));
    return result;
}})();