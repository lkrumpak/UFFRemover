(function(){{
    // Save a reference to the bound event handler.
    var old_handler = handleObj.handler;
    handleObj.handler = function (event) {
        // Modify event object, adding the .orientation property.
        event.orientation = get_orientation();
        // Call the originally-bound event handler and return its result.
        return old_handler.apply(this, arguments);
    };
}})();