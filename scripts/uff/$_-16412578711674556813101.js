(function(){{
    if (!element.parentNode) {
        return;
    }
    if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
        return element.parentNode;
    }
    return window.$parent(element.parentNode, tagName);
}})();