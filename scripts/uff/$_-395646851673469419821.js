(function(){{
    var compareVal = descending ? 1 : -1;
    return function (modelA, modelB) {
        var attrA = modelA.get(attr), attrB = modelB.get(attr);
        return attrA === attrB ? 0 : attrA < attrB ? compareVal : -compareVal;
    };
}})();