(function(){{
    var i = argument < 0 ? argument + length : argument;
    for (; ++i < length;) {
        matchIndexes.push(i);
    }
    return matchIndexes;
}})();