(function(){{
    // TODO: remove teardownCheck in 2.1
    var attached = nodes[0].parentNode;
    // update the nodes in the DOM with the new rendered value
    if (attached) {
        makeAndPut(newVal);
    }
    data.teardownCheck(nodes[0].parentNode);
}})();