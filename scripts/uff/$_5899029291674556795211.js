(function(){{
    // Make a writable jQuery.Event from the native event object
    event = jQuery.event.fix(event);
    var i, ret, handleObj, matched, j, handlerQueue = [], args = slice.call(arguments), handlers = (jQuery._data(        $that, 'events') || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
    // Use the fix-ed jQuery.Event rather than the (read-only) native event
    args[0] = event;
    event.delegateTarget =     $that;
    // Call the preDispatch hook for the mapped type, and let it bail if desired
    if (special.preDispatch && special.preDispatch.call(        $that, event) === false) {
        return;
    }
    // Determine handlers
    handlerQueue = jQuery.event.handlers.call(    $that, event, handlers);
    // Run delegates first; they may want to stop propagation beneath us
    i = 0;
    while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
            // Triggered event must either 1) have no namespace, or
            // 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
            if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== undefined) {
                    if ((event.result = ret) === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }
            }
        }
    }
    // Call the postDispatch hook for the mapped type
    if (special.postDispatch) {
        special.postDispatch.call(        $that, event);
    }
    return event.result;
}})();