(function(){{
    // Add which for key events
    if (event.which == null) {
        event.which = original.charCode != null ? original.charCode : original.keyCode;
    }
    return event;
}})();