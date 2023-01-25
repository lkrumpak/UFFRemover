(function(){{
    var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];
    // Go through the array, translating each of the items to their new values
    if (isArray) {
        for (; i < length; i++) {
            value = callback(elems[i], i, arg);
            if (value != null) {
                ret.push(value);
            }
        }    // Go through every key on the object,
    } else {
        for (i in elems) {
            value = callback(elems[i], i, arg);
            if (value != null) {
                ret.push(value);
            }
        }
    }
    // Flatten any nested arrays
    return concat.apply([], ret);
}})();