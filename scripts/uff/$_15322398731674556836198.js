(function(){{
    if (array == null)
        return void 0;
    if (n == null || guard)
        return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
}})();