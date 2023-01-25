(function(){{
    if (!isElementValid(newNode.element)) {
        return;
    }
    // create attribute
    if (node.attributes) {
        for (var i = 0, l = node.attributes.length; i < l; i++) {
            var attr = node.attributes[i];
            var newAttr = addAttribute(newNode, attr.name, attr.value);
            if (events[attr.name]) {
                newNode.addEvent(events[attr.name], attr.value, newAttr);
            }
        }
    }
    // children
    var child = node.element.firstChild;
    var newChild = newNode.element.firstChild;
    // loop
    while (child && newChild) {
        var childNode = node.getNode(child);
        var newChildNode = new Node(newChild, newNode.scope);
        newNode.children.push(newChildNode);
        newChildNode.parent = newNode;
        newChildNode.template = newNode.template;
        newChildNode.isRepeaterChild = true;
        var compiledNode = compileClone(childNode, newChildNode);
        if (compiledNode) {
            compiledNode.parent = newChildNode;
            compiledNode.template = newChildNode.template;
            newChildNode.children.push(compiledNode);
        }
        child = child.nextSibling;
        newChild = newChild.nextSibling;
    }
    return newChildNode;
}})();