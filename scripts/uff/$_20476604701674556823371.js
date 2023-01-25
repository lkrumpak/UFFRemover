(function(){{
    var propName;
    // Original props are copied
    var props = assign({}, element.props);
    // Reserved names are extracted
    var key = element.key;
    var ref = element.ref;
    // Owner will be preserved, unless ref is overridden
    var owner = element._owner;
    if (config != null) {
        if (config.ref !== undefined) {
            // Silently steal the ref from the parent.
            ref = config.ref;
            owner = ReactCurrentOwner.current;
        }
        if (config.key !== undefined) {
            key = '' + config.key;
        }
        // Remaining properties override existing props
        for (propName in config) {
            if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
            }
        }
    }
    // Children can be more than one argument, and those are transferred onto
    // the newly allocated props object.
    var childrenLength = arguments.length - 2;
    if (childrenLength === 1) {
        props.children = children;
    } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
    }
    return new ReactElement(element.type, key, ref, owner, element._context, props);
}})();