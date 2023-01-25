(function(){{
    iteratee = _.iteratee(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = array.length;
    while (low < high) {
        var mid = low + high >>> 1;
        if (iteratee(array[mid]) < value)
            low = mid + 1;
        else
            high = mid;
    }
    return low;
}})();