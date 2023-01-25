(function(){{
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj), length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
        var currentKey = keys ? keys[index] : index;
        if (!predicate(obj[currentKey], currentKey, obj))
            return false;
    }
    return true;
}})();