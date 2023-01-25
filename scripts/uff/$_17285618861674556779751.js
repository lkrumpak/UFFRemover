(function(){{
    if ('production' !== 'development') {
        ReactElementValidator.checkAndWarnForMutatedProps(nextElement);
    }
    ReactMount.scrollMonitor(container, function () {
        ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement);
        if (callback) {
            ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
        }
    });
    if ('production' !== 'development') {
        // Record the root element in case it later gets transplanted.
        rootElementsByReactRootID[getReactRootID(container)] = getReactRootElementInContainer(container);
    }
    return prevComponent;
}})();