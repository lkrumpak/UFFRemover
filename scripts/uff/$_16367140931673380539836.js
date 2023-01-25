(function(){{
    if (obj == null)
        obj = [];
    iteratee = createCallback(iteratee, context, 4);
    var keys = obj.length !== +obj.length && _.keys(obj), index = (keys || obj).length, currentKey;
    if (arguments.length < 3) {
        if (!index)
            throw new TypeError(reduceError);
        memo = obj[keys ? keys[--index] : --index];
    }
    while (index--) {
        currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
}})();