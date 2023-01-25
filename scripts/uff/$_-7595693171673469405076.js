(function(){{
    var results = [];
    if (obj == null)
        return results;
    if (nativeFilter && obj.filter === nativeFilter)
        return obj.filter(predicate, context);
    each(obj, function (value, index, list) {
        if (predicate.call(context, value, index, list))
            results.push(value);
    });
    return results;
}})();