(function(){{
    if (!vnode.child._isMounted) {
        vnode.child._isMounted = true;
        callHook(vnode.child, 'mounted');
    }
    if (vnode.data.keepAlive) {
        vnode.child._inactive = false;
        callHook(vnode.child, 'activated');
    }
}})();