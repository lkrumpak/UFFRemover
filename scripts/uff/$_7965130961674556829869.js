(function(){{
    var newElement = new ReactElement(oldElement.type, oldElement.key, oldElement.ref, oldElement._owner, oldElement._context, newProps);
    if ('production' !== 'development') {
        // If the key on the original is valid, then the clone is valid
        newElement._store.validated = oldElement._store.validated;
    }
    return newElement;
}})();