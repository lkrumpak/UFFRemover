(function(){{
    inheritProperties(    $that, attribute, node);
    node.addEventListener('change', updateModel, false);
    if (node.attachEvent) {
        node.addEventListener('click', updateModel, false);
    }
}})();