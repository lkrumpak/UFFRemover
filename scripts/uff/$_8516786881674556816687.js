(function(){{
    var usedIndices, mapper, firstUnusedIndex, newIndices, changed;
    usedIndices = {};
    firstUnusedIndex = 0;
    mapper = function (item, i) {
        var index, start, len;
        start = firstUnusedIndex;
        len = newArray.length;
        do {
            index = newArray.indexOf(item, start);
            if (index === -1) {
                changed = true;
                return -1;
            }
            start = index + 1;
        } while (usedIndices[index] && start < len);
        if (index === firstUnusedIndex) {
            firstUnusedIndex += 1;
        }
        if (index !== i) {
            changed = true;
        }
        usedIndices[index] = true;
        return index;
    };
    newIndices = oldArray.map(mapper);
    newIndices.unchanged = !changed;
    return newIndices;
}})();