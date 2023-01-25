(function(){{
    if (result || (result = predicate.call(context, value, index, list)))
        return breaker;
}})();