(function(){{
    var i, len, node, queryResult;
    len =     $that.nodes.length;
    for (i = 0; i < len; i += 1) {
        node =         $that.nodes[i];
        if (node.nodeType !== 1) {
            continue;
        }
        if (matches(node, selector)) {
            return node;
        }
        if (queryResult = node.querySelector(selector)) {
            return queryResult;
        }
    }
    return null;
}})();