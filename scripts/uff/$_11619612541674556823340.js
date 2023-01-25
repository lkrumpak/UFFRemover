(function(){{
    if (DOMProperty.isStandardName.hasOwnProperty(name) && DOMProperty.isStandardName[name]) {
        var mutationMethod = DOMProperty.getMutationMethod[name];
        if (mutationMethod) {
            mutationMethod(node, value);
        } else if (shouldIgnoreValue(name, value)) {
                        $that.deleteValueForProperty(node, name);
        } else if (DOMProperty.mustUseAttribute[name]) {
            // `setAttribute` with objects becomes only `[object]` in IE8/9,
            // ('' + value) makes it output the correct toString()-value.
            node.setAttribute(DOMProperty.getAttributeName[name], '' + value);
        } else {
            var propName = DOMProperty.getPropertyName[name];
            // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
            // property type before comparing; only `value` does and is string.
            if (!DOMProperty.hasSideEffects[name] || '' + node[propName] !== '' + value) {
                // Contrary to `setAttribute`, object properties are properly
                // `toString`ed by IE8/9.
                node[propName] = value;
            }
        }
    } else if (DOMProperty.isCustomAttribute(name)) {
        if (value == null) {
            node.removeAttribute(name);
        } else {
            node.setAttribute(name, '' + value);
        }
    } else if ('production' !== 'development') {
        warnUnknownProperty(name);
    }
}})();