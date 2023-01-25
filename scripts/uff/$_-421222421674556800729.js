(function(){{
    while (vnode.child) {
        vnode = vnode.child._vnode;
    }
    return isDef(vnode.tag);
}})();