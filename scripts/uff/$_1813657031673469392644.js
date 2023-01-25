(function(){{
    var bitmask = BIND_FLAG | BIND_KEY_FLAG;
    if (partials.length) {
        var holders = replaceHolders(partials, bindKey.placeholder);
        bitmask |= PARTIAL_FLAG;
    }
    return createWrapper(key, bitmask, object, partials, holders);
}})();