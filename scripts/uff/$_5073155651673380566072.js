(function(){{
    var lastChild, trailingComments, bottomRight = extra.bottomRightStack, last = bottomRight[bottomRight.length - 1];
    if (node.type === Syntax.Program) {
        /* istanbul ignore else */
        if (node.body.length > 0) {
            return;
        }
    }
    if (extra.trailingComments.length > 0) {
        if (extra.trailingComments[0].range[0] >= node.range[1]) {
            trailingComments = extra.trailingComments;
            extra.trailingComments = [];
        } else {
            extra.trailingComments.length = 0;
        }
    } else {
        if (last && last.trailingComments && last.trailingComments[0].range[0] >= node.range[1]) {
            trailingComments = last.trailingComments;
            delete last.trailingComments;
        }
    }
    // Eating the stack.
    if (last) {
        while (last && last.range[0] >= node.range[0]) {
            lastChild = last;
            last = bottomRight.pop();
        }
    }
    if (lastChild) {
        if (lastChild.leadingComments && lastChild.leadingComments[lastChild.leadingComments.length - 1].range[1] <= node.range[0]) {
            node.leadingComments = lastChild.leadingComments;
            delete lastChild.leadingComments;
        }
    } else if (extra.leadingComments.length > 0 && extra.leadingComments[extra.leadingComments.length - 1].range[1] <= node.range[0]) {
        node.leadingComments = extra.leadingComments;
        extra.leadingComments = [];
    }
    if (trailingComments) {
        node.trailingComments = trailingComments;
    }
    bottomRight.push(node);
}})();