(function(){{
    if (!isElement(element)) {
        throw new Error('Error in soma.template.parseEvents, only a DOM Element can be parsed.');
    }
    if (isRoot) {
        parseAttributes(element, object);
    }
    if (maxDepth === 0) {
        return;
    }
    var child = element.firstChild;
    while (child) {
        if (child.nodeType === 1) {
            if (depth < maxDepth) {
                parseNode(child, object, ++depth);
                parseAttributes(child, object);
            }
        }
        child = child.nextSibling;
    }
}})();