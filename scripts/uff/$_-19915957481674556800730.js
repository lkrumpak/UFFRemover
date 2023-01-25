(function(){{
    if (oldVnode === vnode) {
        return;
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (vnode.isStatic && oldVnode.isStatic && vnode.key === oldVnode.key && (vnode.isCloned || vnode.isOnce)) {
        vnode.elm = oldVnode.elm;
        vnode.child = oldVnode.child;
        return;
    }
    var i;
    var data = vnode.data;
    var hasData = isDef(data);
    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (hasData && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
            cbs.update[i](oldVnode, vnode);
        }
        if (isDef(i = data.hook) && isDef(i = i.update)) {
            i(oldVnode, vnode);
        }
    }
    if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
            if (oldCh !== ch) {
                updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
            }
        } else if (isDef(ch)) {
            if (isDef(oldVnode.text)) {
                nodeOps.setTextContent(elm, '');
            }
            addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
            removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
        }
    } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
    }
    if (hasData) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
            i(oldVnode, vnode);
        }
    }
}})();