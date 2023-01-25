(function(){{
    var taskId = modelPlugin.getItemIndex(node);
    var value;
    if (event.keyCode === ENTER_KEY || event.type === 'blur') {
        value = node.value.trim();
        if (value) {
            model.update(taskId, 'title', value);
        } else {
            model.del(taskId);
        }
        // When task #n is removed, #n+1 becomes #n, the dom node is updated to the new value, so editing mode should exit anyway
        if (model.has(taskId)) {
            toggleEditing(taskId, false);
        }
    } else if (event.keyCode === ESC_KEY) {
        toggleEditing(taskId, false);
        // Also reset the input field to the previous value so that the blur event doesn't pick up the discarded one
        node.value = model.get(taskId).title;
    }
}})();