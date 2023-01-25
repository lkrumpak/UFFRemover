(function(){{
    var closest, diff;
    assert(Array.isArray(array), 'Get closest expects an array as second argument');
    array.forEach(function (comparedItem, comparedItemIndex) {
        var thisDiff = getDiff(comparedItem, item);
        if (thisDiff >= 0 && (typeof diff == 'undefined' || thisDiff < diff)) {
            diff = thisDiff;
            closest = comparedItemIndex;
        }
    });
    return closest;
}})();