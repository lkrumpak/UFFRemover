(function(){{
    return function (node, root) {
        while ((node = node.parentNode) != root) {
            if (_5c1(node, root)) {
                return true;
            }
        }
    };
}})();