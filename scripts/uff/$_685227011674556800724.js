(function(){{
    if (!vnode.child || vnode.child._isDestroyed) {
        var child = vnode.child = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode;
        // work around flow
        prepatch(mountedNode, mountedNode);
    }
}})();