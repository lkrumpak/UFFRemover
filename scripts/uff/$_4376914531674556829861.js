(function(){{
    var node = ReactMount.getNode(id);
    'production' !== 'development' ? invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name), 'updatePropertyByID(...): %s', INVALID_PROPERTY_ERRORS[name]) : invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name));
    // If we're updating to null or undefined, we should remove the property
    // from the DOM node instead of inadvertantly setting to a string. This
    // brings us in line with the same behavior we have on initial render.
    if (value != null) {
        DOMPropertyOperations.setValueForProperty(node, name, value);
    } else {
        DOMPropertyOperations.deleteValueForProperty(node, name);
    }
}})();