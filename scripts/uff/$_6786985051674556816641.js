(function(){{
    var i;
    if (mustache.descriptor.x) {
        if (mustache.expressionResolver) {
            mustache.expressionResolver.teardown();
        }
        mustache.expressionResolver = new ExpressionResolver(mustache);
    }
    if (mustache.keypath) {
        if (mustache.keypath.substr(0, oldKeypath.length) === oldKeypath) {
            mustache.resolve(mustache.keypath.replace(oldKeypath, newKeypath));
        }
    } else if (mustache.indexRef === indexRef) {
        mustache.value = newIndex;
        mustache.render(newIndex);
    }
    if (mustache.fragments) {
        i = mustache.fragments.length;
        while (i--) {
            reassignFragment(mustache.fragments[i], indexRef, oldIndex, newIndex, by, oldKeypath, newKeypath);
        }
    }
}})();