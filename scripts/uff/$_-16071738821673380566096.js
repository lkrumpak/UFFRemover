(function(){{
    if (aIdx >= 0 && aIdx <        $that._array.length) {
        return        $that._array[aIdx];
    }
    throw new Error('No element indexed by ' + aIdx);
}})();