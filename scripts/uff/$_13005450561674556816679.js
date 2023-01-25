(function(){{
    var el, partial, errorMessage;
    if (partial = getPartialFromRegistry(root, name)) {
        return partial;
    }
    if (isClient) {
        el = document.getElementById(name);
        if (el && el.tagName === 'SCRIPT') {
            if (!parse) {
                throw new Error(errors.missingParser);
            }
            registerPartial(parse(el.innerHTML), name, partials);
        }
    }
    partial = partials[name];
    if (!partial) {
        errorMessage = 'Could not find descriptor for partial "' + name + '"';
        if (root.debug) {
            throw new Error(errorMessage);
        } else {
            warn(errorMessage);
        }
        return [];
    }
    return unpack(partial);
}})();