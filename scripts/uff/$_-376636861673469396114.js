(function(){{
    var fn = options.fn, inverse = options.inverse;
    var i = 0, ret = '', data;
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