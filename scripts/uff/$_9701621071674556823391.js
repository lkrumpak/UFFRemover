(function(){{
    // TODO: Fix this heuristic. It's just here because composites can currently
    // pretend to be DOM components.
    return !!(inst && inst.tagName && inst.getDOMNode);
}})();