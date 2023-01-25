(function(){{
    var node = e.target || e.srcElement;
    for (; node && node != root; node = node.parentNode) {
        if (matchesSelector.call(node, selector)) {
            e.delegateTarget = node;
            listener(e);
        }
    }
}})();