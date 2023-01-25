(function(){{
    return containsChildMatching(node, function (node) {
        return node.type === type;
    });
}})();