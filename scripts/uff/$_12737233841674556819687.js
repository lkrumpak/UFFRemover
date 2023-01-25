(function(){{
    var index = ArrayUtils.indexOf(a, o);
    if (index > -1) {
        a.splice(index, 1);
    }
    return index;
}})();