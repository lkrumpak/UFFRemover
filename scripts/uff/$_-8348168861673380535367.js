(function(){{
    var options = vnode.componentOptions;
    var child = vnode.child = oldVnode.child;
    child._updateFromParent(options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children);
}})();