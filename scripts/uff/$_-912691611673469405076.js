(function(){{
    predicate || (predicate = _.identity);
    var result = true;
    if (obj == null)
        return result;
    if (nativeEvery && obj.every === nativeEvery)
        return obj.every(predicate, context);
    each(obj, function (value, index, list) {
        if (!(result = result && predicate.call(context, value, index, list)))
            return breaker;
    });
    return !!result;
}})();