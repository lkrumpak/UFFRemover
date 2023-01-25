(function(){{
    if ('production' !== 'development') {
        if (typeof object !== 'object' || !object || Array.isArray(object)) {
            'production' !== 'development' ? warning(false, 'React.addons.createFragment only accepts a single object.', object) : null;
            return object;
        }
        if (ReactElement.isValidElement(object)) {
            'production' !== 'development' ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : null;
            return object;
        }
        if (canWarnForReactFragment) {
            var proxy = {};
            Object.defineProperty(proxy, fragmentKey, {
                enumerable: false,
                value: object
            });
            Object.defineProperty(proxy, didWarnKey, {
                writable: true,
                enumerable: false,
                value: false
            });
            for (var key in object) {
                proxyPropertyAccessWithWarning(proxy, key);
            }
            Object.preventExtensions(proxy);
            return proxy;
        }
    }
    return object;
}})();