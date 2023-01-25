(function(){{
    if (vendor)
        return vendor.call(el, selector);
    var nodes = el.parentNode.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; ++i) {
        if (nodes[i] == el)
            return true;
    }
    return false;
}})();