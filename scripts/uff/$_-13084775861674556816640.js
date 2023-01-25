(function(){{
    var i, item, context, query;
    if (fragment.html) {
        return;
    }
    if (fragment.indexRefs && fragment.indexRefs[indexRef] !== undefined) {
        fragment.indexRefs[indexRef] = newIndex;
    }
    i = fragment.contextStack.length;
    while (i--) {
        context = fragment.contextStack[i];
        if (context.substr(0, oldKeypath.length) === oldKeypath) {
            fragment.contextStack[i] = context.replace(oldKeypath, newKeypath);
        }
    }
    i = fragment.items.length;
    while (i--) {
        item = fragment.items[i];
        switch (item.type) {
        case types.ELEMENT:
            reassignElement(item, indexRef, oldIndex, newIndex, by, oldKeypath, newKeypath);
            break;
        case types.PARTIAL:
            reassignFragment(item.fragment, indexRef, oldIndex, newIndex, by, oldKeypath, newKeypath);
            break;
        case types.COMPONENT:
            reassignFragment(item.instance.fragment, indexRef, oldIndex, newIndex, by, oldKeypath, newKeypath);
            if (query = fragment.root._liveComponentQueries[item.name]) {
                query._makeDirty();
            }
            break;
        case types.SECTION:
        case types.INTERPOLATOR:
        case types.TRIPLE:
            reassignMustache(item, indexRef, oldIndex, newIndex, by, oldKeypath, newKeypath);
            break;
        }
    }
}})();