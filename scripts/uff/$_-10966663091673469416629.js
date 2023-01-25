(function(){{
    var keys, starMap, mapper, i, result, wildcardKeypath;
    keys = keypath.split('.');
    starMap = getStarMap(keys.length);
    result = [];
    mapper = function (star, i) {
        return star ? '*' : keys[i];
    };
    i = starMap.length;
    while (i--) {
        wildcardKeypath = starMap[i].map(mapper).join('.');
        if (!result[wildcardKeypath]) {
            result[result.length] = wildcardKeypath;
            result[wildcardKeypath] = true;
        }
    }
    return result;
}})();