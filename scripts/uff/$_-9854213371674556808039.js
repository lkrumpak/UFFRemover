(function(){{
    do {
        if (node.dojoClick !== undefined) {
            return node;
        }
    } while (node = node.parentNode);
}})();