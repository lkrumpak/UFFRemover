(function(){{
    if (DOMProperty.isStandardName.hasOwnProperty(name) && DOMProperty.isStandardName[name]) {
        var mutationMethod = DOMProperty.getMutationMethod[name];
        if (mutationMethod) {
            mutationMethod(node, undefined);
        } else if (DOMProperty.mustUseAttribute[name]) {
            node.removeAttribute(DOMProperty.getAttributeName[name]);
        } else {
            var propName = DOMProperty.getPropertyName[name];
            var defaultValue = DOMProperty.getDefaultValueForProperty(node.nodeName, propName);
            if (!DOMProperty.hasSideEffects[name] || '' + node[propName] !== defaultValue) {
                node[propName] = defaultValue;
            }
        }
    } else if (DOMProperty.isCustomAttribute(name)) {
        node.removeAttribute(name);
    } else if ('production' !== 'development') {
        warnUnknownProperty(name);
    }
}})();