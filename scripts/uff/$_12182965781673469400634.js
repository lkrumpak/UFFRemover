(function(){{
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
        // use default namespace inside foreignObject
        return;
    }
    if (vnode.children) {
        for (var i = 0, l = vnode.children.length; i < l; i++) {
            var child = vnode.children[i];
            if (child.tag && !child.ns) {
                applyNS(child, ns);
            }
        }
    }
}})();