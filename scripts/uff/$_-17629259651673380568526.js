(function(){{
    options = options || {};
    if (object && typeof object == 'object') {
        if (typeof property == 'string' && property !== '') {
            var split = property.split('.');
            return split.reduce(function (obj, prop, idx, array) {
                if (idx == array.length - 1) {
                    if (options.own) {
                        return !!(obj && obj.hasOwnProperty(prop));
                    } else {
                        return !!(obj !== null && typeof obj == 'object' && prop in obj);
                    }
                }
                return obj && obj[prop];
            }, object);
        } else if (typeof property == 'number') {
            return property in object;
        } else {
            return false;
        }
    } else {
        return false;
    }
}})();