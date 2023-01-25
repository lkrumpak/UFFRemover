(function(){{
    var queryAllResult, i, numNodes, node, registeredNodes;
    if (query._test(        $that, true) && query.live) {
        (        $that.liveQueries || (        $that.liveQueries = [])).push(selector);
                $that.liveQueries[selector] = [            $that.node];
    }
    if (        $that.html && (queryAllResult =         $that.node.querySelectorAll(selector)) && (numNodes = queryAllResult.length)) {
        if (query.live) {
            if (!                $that.liveQueries[selector]) {
                (                $that.liveQueries || (                $that.liveQueries = [])).push(selector);
                                $that.liveQueries[selector] = [];
            }
            registeredNodes =             $that.liveQueries[selector];
        }
        for (i = 0; i < numNodes; i += 1) {
            node = queryAllResult[i];
            query.push(node);
            if (query.live) {
                registeredNodes.push(node);
            }
        }
    }
    if (        $that.fragment) {
                $that.fragment.findAll(selector, query);
    }
}})();