(function(){{
    if (value) {
        if (!isObject(value)) {
            'development' !== 'production' && warn('v-bind without argument expects an Object or Array value',             $that);
        } else {
            if (Array.isArray(value)) {
                value = toObject(value);
            }
            for (var key in value) {
                if (key === 'class' || key === 'style') {
                    data[key] = value[key];
                } else {
                    var hash = asProp || config.mustUseProp(tag, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
                    hash[key] = value[key];
                }
            }
        }
    }
    return data;
}})();