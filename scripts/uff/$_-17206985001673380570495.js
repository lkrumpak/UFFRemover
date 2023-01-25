(function(){{
    var key;
    if (isArrayLike(obj)) {
        key = _.findIndex(obj, predicate, context);
    } else {
        key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1)
        return obj[key];
}})();