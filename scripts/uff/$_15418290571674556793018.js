(function(){{
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = arrayTag, othTag = arrayTag;
    if (!objIsArr) {
        objTag = objToString.call(object);
        if (objTag == argsTag) {
            objTag = objectTag;
        } else if (objTag != objectTag) {
            objIsArr = isTypedArray(object);
        }
    }
    if (!othIsArr) {
        othTag = objToString.call(other);
        if (othTag == argsTag) {
            othTag = objectTag;
        } else if (othTag != objectTag) {
            othIsArr = isTypedArray(other);
        }
    }
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && !(objIsArr || objIsObj)) {
        return equalByTag(object, other, objTag);
    }
    if (!isLoose) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'), othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
        if (objIsWrapped || othIsWrapped) {
            return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
        }
    }
    if (!isSameTag) {
        return false;
    }
    // Assume cyclic values are equal.
    // For more information on detecting circular references see https://es5.github.io/#JO.
    stackA || (stackA = []);
    stackB || (stackB = []);
    var length = stackA.length;
    while (length--) {
        if (stackA[length] == object) {
            return stackB[length] == other;
        }
    }
    // Add `object` and `other` to the stack of traversed objects.
    stackA.push(object);
    stackB.push(other);
    var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
    stackA.pop();
    stackB.pop();
    return result;
}})();