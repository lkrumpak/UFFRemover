(function(){{
    switch (event.type) {
    case todomvc.view.event.AppEvents.TOGGLE_COMPLETE_ALL:
                $that.sendNotification(todomvc.AppConstants.TOGGLE_TODO_STATUS, event.doToggleComplete);
        break;
    case todomvc.view.event.AppEvents.DELETE_ITEM:
                $that.sendNotification(todomvc.AppConstants.DELETE_TODO, event.todoId);
        break;
    case todomvc.view.event.AppEvents.ADD_ITEM:
                $that.sendNotification(todomvc.AppConstants.ADD_TODO, event.todo);
        break;
    case todomvc.view.event.AppEvents.CLEAR_COMPLETED:
                $that.sendNotification(todomvc.AppConstants.REMOVE_TODOS_COMPLETED);
        break;
    case todomvc.view.event.AppEvents.TOGGLE_COMPLETE:
    case todomvc.view.event.AppEvents.UPDATE_ITEM:
                $that.sendNotification(todomvc.AppConstants.UPDATE_TODO, event.todo);
        break;
    }
}})();