(function(){{
    var i, len, item, node, queryAllResult, numNodes, j;
    if (        $that.nodes) {
        len =         $that.nodes.length;
        for (i = 0; i < len; i += 1) {
            node =             $that.nodes[i];
            if (node.nodeType !== 1) {
                continue;
            }
            if (matches(node, selector)) {
                query.push(node);
            }
            if (queryAllResult = node.querySelectorAll(selector)) {
                numNodes = queryAllResult.length;
                for (j = 0; j < numNodes; j += 1) {
                    query.push(queryAllResult[j]);
                }
            }
        }
    } else if (        $that.items) {
        len =         $that.items.length;
        for (i = 0; i < len; i += 1) {
            item =             $that.items[i];
            if (item.findAll) {
                item.findAll(selector, query);
            }
        }
    }
    return query;
}})();