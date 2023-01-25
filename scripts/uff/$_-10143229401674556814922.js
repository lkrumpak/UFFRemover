(function(){{
    if (string == null)
        return '';
    return ('' + string).replace(entityRe, function (match) {
        return htmlEntities[match];
    });
}})();