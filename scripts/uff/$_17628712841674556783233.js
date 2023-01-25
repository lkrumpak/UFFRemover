(function(){{
    var toggleCompleteAllEvent =     $that.createEvent(todomvc.view.event.AppEvents.TOGGLE_COMPLETE_ALL);
    toggleCompleteAllEvent.doToggleComplete = checked;
        $that.dispatchEvent(toggleCompleteAllEvent);
}})();