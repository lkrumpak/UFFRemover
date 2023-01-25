(function(){{
    var nodes, i;
    nodes = (node.parentNode || node.document).querySelectorAll(selector);
    i = nodes.length;
    while (i--) {
        if (nodes[i] === node) {
            return true;
        }
    }
    return false;
}})();