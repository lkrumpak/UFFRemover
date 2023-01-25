(function(){{
    var result, key;
    if (typeof obj !== 'object') {
        return obj;
    }
    if (isArray(obj)) {
        return obj.map(deepClone);
    }
    result = {};
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key]);
        }
    }
    return result;
}})();