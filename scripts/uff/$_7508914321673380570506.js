(function(){{
    iteratee = cb(iteratee, context);
    var keys = _.keys(obj), length = keys.length, results = {}, currentKey;
    for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
}})();