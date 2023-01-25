(function(){{
    var res = {};
    var styleData;
    if (checkChild) {
        var childNode = vnode;
        while (childNode.child) {
            childNode = childNode.child._vnode;
            if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
                extend(res, styleData);
            }
        }
    }
    if (styleData = normalizeStyleData(vnode.data)) {
        extend(res, styleData);
    }
    var parentNode = vnode;
    while (parentNode = parentNode.parent) {
        if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
            extend(res, styleData);
        }
    }
    return res;
}})();