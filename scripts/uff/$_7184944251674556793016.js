(function(){{
    var length = array.length;
    if (initFromArray && length) {
        accumulator = array[--length];
    }
    while (length--) {
        accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
}})();