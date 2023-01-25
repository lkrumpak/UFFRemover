(function(){{
    for (var args = [], $__0 = 1, $__1 = arguments.length; $__0 < $__1; $__0++)
        args.push(arguments[$__0]);
    // User is trying to bind() an autobound method; we effectively will
    // ignore the value of "this" that the user is trying to use, so
    // let's warn.
    if (newThis !== component && newThis !== null) {
        'production' !== 'development' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : null;
    } else if (!args.length) {
        'production' !== 'development' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : null;
        return boundMethod;
    }
    var reboundMethod = _bind.apply(boundMethod, arguments);
    reboundMethod.__reactBoundContext = component;
    reboundMethod.__reactBoundMethod = method;
    reboundMethod.__reactBoundArguments = args;
    return reboundMethod;    /* eslint-enable */
}})();