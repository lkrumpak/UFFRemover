(function(){{
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null)
        return result;
    if (nativeSome && obj.some === nativeSome)
        return obj.some(predicate, context);
    each(obj, function (value, index, list) {
        if (result || (result = predicate.call(context, value, index, list)))
            return breaker;
    });
    return !!result;
}})();