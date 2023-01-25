(function(){{
    options = options || {};
    if (object && typeof object == 'object') {
        if (typeof property == 'string' && property !== '') {
            var split = property.split('.'), isIn = false, pathExists;
            pathExists = !!split.reduce(function (obj, prop) {
                isIn = isIn || obj === objectInPath || !!obj && obj[prop] === objectInPath;
                return obj && obj[prop];
            }, object);
            if (options.validPath) {
                return isIn && pathExists;
            } else {
                return isIn;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}})();