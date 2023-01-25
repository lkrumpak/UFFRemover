(function(){{
    var deleteItemEvent =     $that.createEvent(todomvc.view.event.AppEvents.DELETE_ITEM);
    deleteItemEvent.todoId = id;
        $that.dispatchEvent(deleteItemEvent);
}})();