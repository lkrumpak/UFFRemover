(function(){{
    if (width) {
        element.node.width = width.value;
    }
    if (height) {
        element.node.height = height.value;
    }
    element.node.removeEventListener('load', loadHandler, false);
}})();