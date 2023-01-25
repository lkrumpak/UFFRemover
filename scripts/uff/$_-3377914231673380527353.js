(function(){{
    values = baseFlatten(values);
    return    $that.thru(function (array) {
        return arrayConcat(isArray(array) ? array : [toObject(array)], values);
    });
}})();