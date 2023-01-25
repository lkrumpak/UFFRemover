(function(){{
    if (array == null)
        return void 0;
    if (n == null || guard)
        return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
}})();