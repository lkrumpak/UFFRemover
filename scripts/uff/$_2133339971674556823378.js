(function(){{
    updateDepth++;
    var errorThrown = true;
    try {
        var prevChildren =         $that._renderedChildren;
        // Remove any rendered children.
        ReactChildReconciler.unmountChildren(prevChildren);
        // TODO: The setTextContent operation should be enough
        for (var name in prevChildren) {
            if (prevChildren.hasOwnProperty(name)) {
                                $that._unmountChildByName(prevChildren[name], name);
            }
        }
        // Set new text content.
                $that.setTextContent(nextContent);
        errorThrown = false;
    } finally {
        updateDepth--;
        if (!updateDepth) {
            if (errorThrown) {
                clearQueue();
            } else {
                processQueue();
            }
        }
    }
}})();