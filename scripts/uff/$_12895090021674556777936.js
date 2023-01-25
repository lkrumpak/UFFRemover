(function(){{
    if (!nodeList.isUnregistered) {
        nodeList.isUnregistered = true;
        // unregister all childNodeLists
        delete nodeList.parentNodeList;
        can.each(nodeList, function (node) {
            var nodeId = id(node);
            delete nodeMap[nodeId];
        });
        // this can unbind which will call itself
        if (nodeList.unregistered) {
            nodeList.unregistered();
        }
        can.each(nodeList.childNodeLists, function (nodeList) {
            nodeLists.unregister(nodeList);
        });
    }
}})();