(function(){{
    switch (typeof propValue) {
    case 'number':
    case 'string':
    case 'undefined':
        return true;
    case 'boolean':
        return !propValue;
    case 'object':
        if (Array.isArray(propValue)) {
            return propValue.every(isNode);
        }
        if (propValue === null || ReactElement.isValidElement(propValue)) {
            return true;
        }
        propValue = ReactFragment.extractIfFragment(propValue);
        for (var k in propValue) {
            if (!isNode(propValue[k])) {
                return false;
            }
        }
        return true;
    default:
        return false;
    }
}})();