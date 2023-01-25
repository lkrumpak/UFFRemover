(function(){{
    var index = -1, length = arguments.length;
    while (++index < length) {
        var array = arguments[index];
        if (isArrayLike(array)) {
            var result = result ? arrayPush(baseDifference(result, array), baseDifference(array, result)) : array;
        }
    }
    return result ? baseUniq(result) : [];
}})();