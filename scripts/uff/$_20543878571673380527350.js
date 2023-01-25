(function(){{
    var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = arrayCopy(array);
    while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
    }
    return array;
}})();