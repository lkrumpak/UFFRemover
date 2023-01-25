(function(){{
    var result;
    if (customizer) {
        result = object ? customizer(value, key, object) : customizer(value);
    }
    if (result !== undefined) {
        return result;
    }
    if (!isObject(value)) {
        return value;
    }
    var isArr = isArray(value);
    if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
            return arrayCopy(value, result);
        }
    } else {
        var tag = objToString.call(value), isFunc = tag == funcTag;
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result = initCloneObject(isFunc ? {} : value);
            if (!isDeep) {
                return baseAssign(result, value);
            }
        } else {
            return cloneableTags[tag] ? initCloneByTag(value, tag, isDeep) : object ? value : {};
        }
    }
    // Check for circular references and return its corresponding clone.
    stackA || (stackA = []);
    stackB || (stackB = []);
    var length = stackA.length;
    while (length--) {
        if (stackA[length] == value) {
            return stackB[length];
        }
    }
    // Add the source value to the stack of traversed objects and associate it with its clone.
    stackA.push(value);
    stackB.push(result);
    // Recursively populate clone (susceptible to call stack limits).
    (isArr ? arrayEach : baseForOwn)(value, function (subValue, key) {
        result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
    });
    return result;
}})();