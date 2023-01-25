(function(){{
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0)
        throw new Error('bindAll must be passed function names');
    each(funcs, function (f) {
        obj[f] = _.bind(obj[f], obj);
    });
    return obj;
}})();