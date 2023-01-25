(function(){{
    if ('production' !== 'development') {
        'production' !== 'development' ? warning(didWarn, 'withContext is deprecated and will be removed in a future version. ' + 'Use a wrapper component with getChildContext instead.') : null;
        didWarn = true;
    }
    var result;
    var previousContext = ReactContext.current;
    ReactContext.current = assign({}, previousContext, newContext);
    try {
        result = scopedCallback();
    } finally {
        ReactContext.current = previousContext;
    }
    return result;
}})();