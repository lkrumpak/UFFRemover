(function(){{
    owner.decorator = new Decorator(descriptor, root, owner, contextStack);
    if (owner.decorator.fn) {
        root._deferred.decorators.push(owner.decorator);
    }
}})();