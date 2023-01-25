(function(){{
    var length = array ? indexes.length : 0;
    while (length--) {
        var index = indexes[length];
        if (index != previous && isIndex(index)) {
            var previous = index;
            splice.call(array, index, 1);
        }
    }
    return array;
}})();