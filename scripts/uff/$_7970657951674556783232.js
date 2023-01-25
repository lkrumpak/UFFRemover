(function(){{
    var todo, toggleItemCompleteEvent;
    todo =     $that.getTodoById(event.target.getAttribute('data-todo-id'));
    todo.id = event.target.getAttribute('data-todo-id');
    todo.completed = event.target.checked;
    toggleItemCompleteEvent =     $that.createEvent(todomvc.view.event.AppEvents.TOGGLE_COMPLETE);
    toggleItemCompleteEvent.todo = todo;
        $that.dispatchEvent(toggleItemCompleteEvent);
}})();