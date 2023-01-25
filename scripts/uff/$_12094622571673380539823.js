(function(){{
    if (string == null)
        return '';
    return ('' + string).replace(entityRegexes[method], function (match) {
        return entityMap[method][match];
    });
}})();