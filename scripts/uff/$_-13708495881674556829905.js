(function(){{
    var returnValue = EventPluginUtils.executeDispatch(event, listener, domID);
    'production' !== 'development' ? warning(typeof returnValue !== 'boolean', 'Returning `false` from an event handler is deprecated and will be ' + 'ignored in a future release. Instead, manually call ' + 'e.stopPropagation() or e.preventDefault(), as appropriate.') : null;
    if (returnValue === false) {
        event.stopPropagation();
        event.preventDefault();
    }
}})();