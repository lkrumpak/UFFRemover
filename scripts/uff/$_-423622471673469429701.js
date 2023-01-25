(function(){{
    if (!inst) {
        return [];
    }
    var ret = test(inst) ? [inst] : [];
    if (ReactTestUtils.isDOMComponent(inst)) {
        var internalInstance = ReactInstanceMap.get(inst);
        var renderedChildren = internalInstance._renderedComponent._renderedChildren;
        var key;
        for (key in renderedChildren) {
            if (!renderedChildren.hasOwnProperty(key)) {
                continue;
            }
            if (!renderedChildren[key].getPublicInstance) {
                continue;
            }
            ret = ret.concat(ReactTestUtils.findAllInRenderedTree(renderedChildren[key].getPublicInstance(), test));
        }
    } else if (ReactTestUtils.isCompositeComponent(inst)) {
        ret = ret.concat(ReactTestUtils.findAllInRenderedTree(ReactTestUtils.getRenderedChildOfCompositeComponent(inst), test));
    }
    return ret;
}})();