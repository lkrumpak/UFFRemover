(function(){{
    var newNode = new Node(element, node.scope._createChild());
    newNode.template = node.template;
    newNode.parent = node;
    newNode.isRepeaterChild = true;
    newNode.isRepeaterDescendant = true;
    compileClone(node, newNode);
    return newNode;
}})();