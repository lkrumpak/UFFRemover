(function(){{
    if (object && typeof object == 'object') {
        if (typeof property == 'string' && property !== '') {
            var split = property.split('.');
            return split.reduce(function (obj, prop, idx) {
                obj[prop] = obj[prop] || {};
                if (split.length == idx + 1) {
                    obj[prop] = value;
                }
                return obj[prop];
            }, object);
        } else if (typeof property == 'number') {
            object[property] = value;
            return object[property];
        } else {
            return object;
        }
    } else {
        return object;
    }
}})();