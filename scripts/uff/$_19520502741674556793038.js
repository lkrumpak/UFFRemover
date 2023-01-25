(function(){{
    start = +start || 0;
    if (end === undefined) {
        end = start;
        start = 0;
    } else {
        end = +end || 0;
    }
    return value >= nativeMin(start, end) && value < nativeMax(start, end);
}})();