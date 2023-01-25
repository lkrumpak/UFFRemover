(function(){{
    var result = baseCreate(prototype);
    if (guard && isIterateeCall(prototype, properties, guard)) {
        properties = undefined;
    }
    return properties ? baseAssign(result, properties) : result;
}})();