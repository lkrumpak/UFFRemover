(function(){{
    if (node.type !== Syntax.ObjectExpression) {
        return false;
    }
    // Tight loop optimization
    var hasAtLeastOneSpreadProperty = false;
    for (var i = 0; i < node.properties.length; i++) {
        var property = node.properties[i];
        if (property.type === Syntax.SpreadProperty) {
            hasAtLeastOneSpreadProperty = true;
        } else if (property.kind !== 'init') {
            return false;
        }
    }
    return hasAtLeastOneSpreadProperty;
}})();