(function(){{
    var i = argument < 0 ? argument + length : argument;
    for (; --i >= 0;) {
        matchIndexes.push(i);
    }
    return matchIndexes;
}})();