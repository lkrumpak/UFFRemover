(function(){{
    var node = ReactMount.getNode(id);
    'production' !== 'development' ? invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name), 'updatePropertyByID(...): %s', INVALID_PROPERTY_ERRORS[name]) : invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name));
    DOMPropertyOperations.deleteValueForProperty(node, name, value);
}})();