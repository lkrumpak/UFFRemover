(function(){{
    var key, member;
    registries.forEach(function (property) {
        var value = childProps[property];
        if (value) {
            if (Child[property]) {
                augment(Child[property], value);
            } else {
                Child[property] = value;
            }
        }
    });
    initOptions.forEach(function (property) {
        var value = childProps[property];
        if (value !== undefined) {
            if (typeof value === 'function' && typeof Child[property] === 'function') {
                Child[property] = wrapMethod(value, Child[property]);
            } else {
                Child[property] = childProps[property];
            }
        }
    });
    for (key in childProps) {
        if (childProps.hasOwnProperty(key) && !blacklisted[key]) {
            member = childProps[key];
            if (typeof member === 'function' && typeof Child.prototype[key] === 'function') {
                Child.prototype[key] = wrapMethod(member, Child.prototype[key]);
            } else {
                Child.prototype[key] = member;
            }
        }
    }
}})();