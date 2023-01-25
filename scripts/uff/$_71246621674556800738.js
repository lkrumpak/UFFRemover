(function(){{
    var parent = el.parentNode;
    var pendingNode = parent && parent._pending && parent._pending[vnode.key];
    if (pendingNode && pendingNode.context === vnode.context && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
    }
    enterHook && enterHook(el, cb);
}})();