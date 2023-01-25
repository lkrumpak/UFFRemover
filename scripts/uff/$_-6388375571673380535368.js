(function(){{
    var tree =     $that._staticTrees[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree by doing a shallow clone.
    if (tree && !isInFor) {
        return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
    }
    // otherwise, render a fresh tree.
    tree =     $that._staticTrees[index] =     $that.$options.staticRenderFns[index].call(    $that._renderProxy);
    markStatic(tree, '__static__' + index, false);
    return tree;
}})();