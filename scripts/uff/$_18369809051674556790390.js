(function(){{
    if (obj === null) {
        helpersObject = {};
        helpersScopeObject = {};
    }
    if (isDefined(obj) && isObject(obj)) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                helpersObject[key] = helpersScopeObject[key] = obj[key];
            }
        }
    }
    return helpersObject;
}})();