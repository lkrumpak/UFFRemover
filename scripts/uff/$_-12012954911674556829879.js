(function(){{
    // `merge` overrides the first object's (`props[key]` above) keys using the
    // second object's (`value`) keys. An object's style's existing `propA` would
    // get overridden. Flip the order here.
    return assign({}, b, a);
}})();