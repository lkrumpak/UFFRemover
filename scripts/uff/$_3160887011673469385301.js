(function(){{
    if (isFunction(context)) {
        context = context.call(        $that);
    }
    if (!Utils.isEmpty(context))
        return options.fn(context);
}})();