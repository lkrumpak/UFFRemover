(function(){{
    var existingChild = node.childrenRepeater[count];
    if (!existingChild) {
        var newElement = node.element.cloneNode(true);
        // need to append the cloned element to the DOM
        // before changing attributes or IE will crash
        appendRepeaterElement(previousElement, node, newElement);
        // can't recreate the node with a cloned element on IE7
        // be cause the attributes are not specified anymore (attribute.specified)
        //var newNode = getNodeFromElement(newElement, node.scope._createChild(), true);
        var newNode = cloneRepeaterNode(newElement, node);
        node.childrenRepeater[count] = newNode;
        updateScopeWithRepeaterData(node.repeater, newNode.scope, data);
        newNode.scope[indexVar] = indexVarValue;
        newNode.update();
        newNode.render();
        return newElement;
    } else {
        // existing node
        updateScopeWithRepeaterData(node.repeater, existingChild.scope, data);
        existingChild.scope[indexVar] = indexVarValue;
        existingChild.update();
        existingChild.render();
        return existingChild.element;
    }
}})();