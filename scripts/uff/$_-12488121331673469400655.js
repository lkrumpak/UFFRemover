(function(){{
    var children = el.inlineTemplate ? null : genChildren(el, true);
    return '_c(' + componentName + ',' + genData(el) + (children ? ',' + children : '') + ')';
}})();