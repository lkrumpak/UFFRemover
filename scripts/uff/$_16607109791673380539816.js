(function(){{
    if (array == null)
        return void 0;
    if (n == null || guard)
        return array[0];
    if (n < 0)
        return [];
    return slice.call(array, 0, n);
}})();