(function(){{
    var index = -1, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
        return false;
    }
    // Ignore non-index properties.
    while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index], result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
        if (result !== undefined) {
            if (result) {
                continue;
            }
            return false;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (isLoose) {
            if (!arraySome(other, function (othValue) {
                    return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
                })) {
                return false;
            }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
            return false;
        }
    }
    return true;
}})();