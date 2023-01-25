(function(){{
    if (guard && isIterateeCall(object, multiValue, guard)) {
        multiValue = undefined;
    }
    var index = -1, props = keys(object), length = props.length, result = {};
    while (++index < length) {
        var key = props[index], value = object[key];
        if (multiValue) {
            if (hasOwnProperty.call(result, value)) {
                result[value].push(key);
            } else {
                result[value] = [key];
            }
        } else {
            result[value] = key;
        }
    }
    return result;
}})();