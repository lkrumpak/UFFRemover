(function(){{
    Object.defineProperty(obj, key, {
        enumerable: true,
        get: function () {
            'production' !== 'development' ? warning(this[didWarnKey], 'A ReactFragment is an opaque type. Accessing any of its ' + 'properties is deprecated. Pass it to one of the React.Children ' + 'helpers.') : null;
            this[didWarnKey] = true;
            return this[fragmentKey][key];
        },
        set: function (value) {
            'production' !== 'development' ? warning(this[didWarnKey], 'A ReactFragment is an immutable opaque type. Mutating its ' + 'properties is deprecated.') : null;
            this[didWarnKey] = true;
            this[fragmentKey][key] = value;
        }
    });
}})();