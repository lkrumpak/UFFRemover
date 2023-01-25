(function(){{
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);
    for (var index = 0; index < length; index++) {
        result[index] = _.pluck(array, index);
    }
    return result;
}})();