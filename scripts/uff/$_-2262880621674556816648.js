(function(){{
    var propertyName;
    if (attribute.pNode && !attribute.namespace && (!options.pNode.namespaceURI || options.pNode.namespaceURI === namespaces.html)) {
        propertyName = propertyNames[attribute.name] || attribute.name;
        if (options.pNode[propertyName] !== undefined) {
            attribute.propertyName = propertyName;
        }
        if (typeof options.pNode[propertyName] === 'boolean' || propertyName === 'value') {
            attribute.useProperty = true;
        }
    }
}})();