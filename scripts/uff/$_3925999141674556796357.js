(function(){{
    var inverse = options.inverse || function () {
        }, fn = options.fn;
    if (isFunction(context)) {
        context = context.call(        $that);
    }
    if (context === true) {
        return fn(        $that);
    } else if (context === false || context == null) {
        return inverse(        $that);
    } else if (isArray(context)) {
        if (context.length > 0) {
            return instance.helpers.each(context, options);
        } else {
            return inverse(            $that);
        }
    } else {
        return fn(context);
    }
}})();