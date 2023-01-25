(function(){{
    if (value === other) {
        return true;
    }
    if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
}})();