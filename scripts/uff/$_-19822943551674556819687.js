(function(){{
    var index = ArrayUtils.indexOf(a, o);
    if (index === -1) {
        a[index = a.length] = o;
    }
    return index;
}})();