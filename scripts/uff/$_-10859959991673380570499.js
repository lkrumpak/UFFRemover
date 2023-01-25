(function(){{
    if (array == null)
        return void 0;
    if (n == null || guard)
        return array[0];
    return _.initial(array, array.length - n);
}})();