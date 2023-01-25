(function(){{
    if (isFunction(conditional)) {
        conditional = conditional.call(        $that);
    }
    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || Utils.isEmpty(conditional)) {
        return options.inverse(        $that);
    } else {
        return options.fn(        $that);
    }
}})();