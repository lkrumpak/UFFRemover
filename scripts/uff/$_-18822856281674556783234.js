(function(){{
    var eventType, updateItemEvent, todo = {};
    todo.id = event.target.id.slice(6);
    todo.title = event.target.value.trim();
    todo.completed = event.target.completed;
    eventType = todo.title === '' ? todomvc.view.event.AppEvents.DELETE_ITEM : todomvc.view.event.AppEvents.UPDATE_ITEM;
    updateItemEvent =     $that.createEvent(eventType);
    updateItemEvent.todo = todo;
    updateItemEvent.todoId = todo.id;
        $that.dispatchEvent(updateItemEvent);
}})();