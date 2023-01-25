(function(){{
    var data, key, value;
    data = {};
    component.complexParameters = [];
    for (key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            value = getValue(component, key, attributes[key], toBind);
            if (value !== undefined) {
                data[key] = value;
            }
        }
    }
    return data;
}})();