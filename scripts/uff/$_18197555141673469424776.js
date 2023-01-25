(function(){{
    var entry, result = {};
    for (entry in object) {
        /* istanbul ignore else */
        if (object.hasOwnProperty(entry)) {
            result[entry] = object[entry];
        }
    }
    for (entry in properties) {
        /* istanbul ignore else */
        if (properties.hasOwnProperty(entry)) {
            result[entry] = properties[entry];
        }
    }
    return result;
}})();