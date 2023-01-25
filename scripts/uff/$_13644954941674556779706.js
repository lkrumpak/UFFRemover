(function(){{
    var nodeDefaults = defaultValueCache[nodeName];
    var testElement;
    if (!nodeDefaults) {
        defaultValueCache[nodeName] = nodeDefaults = {};
    }
    if (!(prop in nodeDefaults)) {
        testElement = document.createElement(nodeName);
        nodeDefaults[prop] = testElement[prop];
    }
    return nodeDefaults[prop];
}})();