(function(){{
    var taskId = modelPlugin.getItemIndex(node);
    toggleEditing(taskId, true);
    getElementByModelId('input.edit', taskId).focus();
}})();