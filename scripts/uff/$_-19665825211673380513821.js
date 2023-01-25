(function(){{
    var newElement = ReactElement.cloneElement.apply(    $that, arguments);
    for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
}})();