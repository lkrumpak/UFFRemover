(function(){{
    if (!ReactTestUtils.isCompositeComponent(inst)) {
        return null;
    }
    var internalInstance = ReactInstanceMap.get(inst);
    return internalInstance._renderedComponent.getPublicInstance();
}})();