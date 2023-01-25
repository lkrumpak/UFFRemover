(function(){{
    var addItemEvent, todo = {};
    todo.completed = false;
    todo.title =     $that.newTodoField.value.trim();
    if (todo.title === '')
        return;
    addItemEvent =     $that.createEvent(todomvc.view.event.AppEvents.ADD_ITEM);
    addItemEvent.todo = todo;
        $that.dispatchEvent(addItemEvent);
}})();