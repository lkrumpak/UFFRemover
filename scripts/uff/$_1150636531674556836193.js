(function(){{
    iteratee = optimizeCb(iteratee, context, 4);
    var keys = !isArrayLike(obj) && _.keys(obj), length = (keys || obj).length, index = dir > 0 ? 0 : length - 1;
    // Determine the initial value if none is provided.
    if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
    }
    return iterator(obj, iteratee, memo, keys, index, length);
}})();