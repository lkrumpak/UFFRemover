(function(){{
    var callback = getCallback(iteratee);
    return iteratee == null && callback === baseCallback ? binaryIndex(array, value, retHighest) : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
}})();