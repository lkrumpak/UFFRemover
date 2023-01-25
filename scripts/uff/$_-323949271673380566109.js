(function(){{
    var names = [];
    for (var i = 0; i < properties.length; i++) {
        var property = properties[i];
        if (property.type === Syntax.SpreadProperty) {
            continue;
        }
        if (property.type === Syntax.Identifier) {
            names.push(property.name);
        } else {
            names.push(property.key.name);
        }
    }
    return names;
}})();