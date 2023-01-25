(function(){{
    if (!previousElement) {
        if (node.element.previousSibling) {
            insertAfter(node.element.previousSibling, newElement);
        } else if (node.element.nextSibling) {
            insertBefore(node.element.nextSibling, newElement);
        } else {
            node.parent.element.appendChild(newElement);
        }
    } else {
        insertAfter(previousElement, newElement);
    }
}})();