(function(){{
    var i, length = arguments.length, key;
    if (length <= 1)
        throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
        key = arguments[i];
        obj[key] = _.bind(obj[key], obj);
    }
    return obj;
}})();