(function(){{
    if ('production' !== 'development') {
        var owner = ReactCurrentOwner.current;
        if (owner !== null) {
            'production' !== 'development' ? warning(owner._warnedAboutRefsInRender, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : null;
            owner._warnedAboutRefsInRender = true;
        }
    }
    var internalInstance = ReactInstanceMap.get(    $that);
    return internalInstance && internalInstance !== ReactLifeCycle.currentlyMountingInstance;
}})();