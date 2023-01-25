(function(){{
    if (isFunction(context)) {
        context = context.call(        $that);
    }
    var fn = options.fn;
    if (!Utils.isEmpty(context)) {
        if (options.data && options.ids) {
            var data = createFrame(options.data);
            data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
            options = { data: data };
        }
        return fn(context, options);
    } else {
        return options.inverse(        $that);
    }
}})();