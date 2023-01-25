(function(){{
    if (!options) {
        throw new Exception('Must pass iterator to #each');
    }
    var fn = options.fn, inverse = options.inverse;
    var i = 0, ret = '', data;
    var contextPath;
    if (options.data && options.ids) {
        contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }
    if (isFunction(context)) {
        context = context.call(        $that);
    }
    if (options.data) {
        data = createFrame(options.data);
    }
    if (context && typeof context === 'object') {
        if (isArray(context)) {
            for (var j = context.length; i < j; i++) {
                if (data) {
                    data.index = i;
                    data.first = i === 0;
                    data.last = i === context.length - 1;
                    if (contextPath) {
                        data.contextPath = contextPath + i;
                    }
                }
                ret = ret + fn(context[i], { data: data });
            }
        } else {
            for (var key in context) {
                if (context.hasOwnProperty(key)) {
                    if (data) {
                        data.key = key;
                        data.index = i;
                        data.first = i === 0;
                        if (contextPath) {
                            data.contextPath = contextPath + key;
                        }
                    }
                    ret = ret + fn(context[key], { data: data });
                    i++;
                }
            }
        }
    }
    if (i === 0) {
        ret = inverse(        $that);
    }
    return ret;
}})();