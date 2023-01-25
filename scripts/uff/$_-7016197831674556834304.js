(function(){{
    if (Array.isArray(indexes)) {
        // Indexes must be removed from the greatest to the lowest
        // To avoid trying to remove indexes that don't exist.
        // i.e: given [0, 1, 2], remove 1, then 2, 2 doesn't exist anymore
        indexes.sort(compareNumbers.desc).forEach(        $that.del,         $that);
        return true;
    } else {
        return false;
    }
}})();