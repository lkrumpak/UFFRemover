(function(){{
    if (!vnode.child._isDestroyed) {
        if (!vnode.data.keepAlive) {
            vnode.child.$destroy();
        } else {
            vnode.child._inactive = true;
            callHook(vnode.child, 'deactivated');
        }
    }
}})();