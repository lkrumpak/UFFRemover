(function(){{
    var length = collection ? getLength(collection) : 0;
    if (!isLength(length)) {
        collection = values(collection);
        length = collection.length;
    }
    if (typeof fromIndex != 'number' || guard && isIterateeCall(target, fromIndex, guard)) {
        fromIndex = 0;
    } else {
        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex || 0;
    }
    return typeof collection == 'string' || !isArray(collection) && isString(collection) ? fromIndex <= length && collection.indexOf(target, fromIndex) > -1 : !!length && getIndexOf(collection, target, fromIndex) > -1;
}})();