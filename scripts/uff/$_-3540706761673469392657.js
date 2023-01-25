(function(){{
    var result =     $that.clone();
    result.__iteratees__.push({
        'iteratee': getCallback(iteratee, thisArg, 1),
        'type': type
    });
    result.__filtered__ = result.__filtered__ || isFilter;
    return result;
}})();