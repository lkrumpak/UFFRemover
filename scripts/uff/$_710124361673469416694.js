(function(){{
    var i, len, item, node, queryResult;
    if (        $that.nodes) {
        len =         $that.nodes.length;
        for (i = 0; i < len; i += 1) {
            node =             $that.nodes[i];
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
    }
    if (        $that.items) {
        len =         $that.items.length;
        for (i = 0; i < len; i += 1) {
            item =             $that.items[i];
            if (item.find && (queryResult = item.find(selector))) {
                return queryResult;
            }
        }
        return null;
    }
}})();