(function(){{
    var length = stackA.length, srcValue = source[key];
    while (length--) {
        if (stackA[length] == srcValue) {
            object[key] = stackB[length];
            return;
        }
    }
    var value = object[key], result = customizer ? customizer(value, srcValue, key, object, source) : undefined, isCommon = result === undefined;
    if (isCommon) {
        result = srcValue;
        if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
            result = isArray(value) ? value : isArrayLike(value) ? arrayCopy(value) : [];
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            result = isArguments(value) ? toPlainObject(value) : isPlainObject(value) ? value : {};
        } else {
            isCommon = false;
        }
    }
    // Add the source value to the stack of traversed objects and associate
    // it with its merged value.
    stackA.push(srcValue);
    stackB.push(result);
    if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
    } else if (result === result ? result !== value : value === value) {
        object[key] = result;
    }
}})();