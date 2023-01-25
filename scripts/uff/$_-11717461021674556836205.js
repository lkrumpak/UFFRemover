(function(){{
    var result = baseCreate(prototype);
    if (props)
        _.extendOwn(result, props);
    return result;
}})();