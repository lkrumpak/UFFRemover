(function(){{
    start = start == null ? 0 : +start || 0;
    var result =     $that;
    if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
    }
    if (start < 0) {
        result = result.takeRight(-start);
    } else if (start) {
        result = result.drop(start);
    }
    if (end !== undefined) {
        end = +end || 0;
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
    }
    return result;
}})();