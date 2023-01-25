(function(){{
    if (value !== other) {
        var valIsNull = value === null, valIsUndef = value === undefined, valIsReflexive = value === value;
        var othIsNull = other === null, othIsUndef = other === undefined, othIsReflexive = other === other;
        if (value > other && !othIsNull || !valIsReflexive || valIsNull && !othIsUndef && othIsReflexive || valIsUndef && othIsReflexive) {
            return 1;
        }
        if (value < other && !valIsNull || !othIsReflexive || othIsNull && !valIsUndef && valIsReflexive || othIsUndef && valIsReflexive) {
            return -1;
        }
    }
    return 0;
}})();