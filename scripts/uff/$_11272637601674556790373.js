(function(){{
    if (!referenceNode.parentNode) {
        return;
    }
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}})();