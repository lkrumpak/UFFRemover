(function(){{
    if (isPlainObject(source)) {
        return mixIn({}, source);
    } else {
        return source;
    }
}})();