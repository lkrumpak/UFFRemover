(function(){{
    var i, len, node, queryAllResult, numNodes, j;
    len =     $that.nodes.length;
    for (i = 0; i < len; i += 1) {
        node =         $that.nodes[i];
        if (node.nodeType !== 1) {
            continue;
        }
        if (matches(node, selector)) {
            queryResult.push(node);
        }
        if (queryAllResult = node.querySelectorAll(selector)) {
            numNodes = queryAllResult.length;
            for (j = 0; j < numNodes; j += 1) {
                queryResult.push(queryAllResult[j]);
            }
        }
    }
}})();