(function(){{
    inheritProperties(    $that, attribute, node);
    node.addEventListener('change', updateModel, false);
    if (!        $that.root.lazy) {
        node.addEventListener('input', updateModel, false);
        if (node.attachEvent) {
            node.addEventListener('keyup', updateModel, false);
        }
    }
}})();