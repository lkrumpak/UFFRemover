(function(){{
    var item, errorMessage;
    if (attribute.fragment.items.length !== 1) {
        return null;
    }
    item = attribute.fragment.items[0];
    if (item.type !== types.INTERPOLATOR) {
        return null;
    }
    if (!item.keypath && !item.ref) {
        return null;
    }
    if (item.keypath && item.keypath.substr(0, 2) === '${') {
        errorMessage = 'You cannot set up two-way binding against an expression ' + item.keypath;
        if (attribute.root.debug) {
            warn(errorMessage);
        }
        return null;
    }
    return item;
}})();