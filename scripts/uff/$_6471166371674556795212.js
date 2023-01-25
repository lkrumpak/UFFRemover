(function(){{
    var sel, handleObj, matches, i, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
    // Find delegate handlers
    // Black-hole SVG <use> instance trees (#13180)
    // Avoid non-left-click bubbling in Firefox (#3861)
    if (delegateCount && cur.nodeType && (!event.button || event.type !== 'click')) {
        /* jshint eqeqeq: false */
        for (; cur !=            $that; cur = cur.parentNode ||            $that) {
            /* jshint eqeqeq: true */
            // Don't check non-elements (#13208)
            // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
            if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== 'click')) {
                matches = [];
                for (i = 0; i < delegateCount; i++) {
                    handleObj = handlers[i];
                    // Don't conflict with Object.prototype properties (#13203)
                    sel = handleObj.selector + ' ';
                    if (matches[sel] === undefined) {
                        matches[sel] = handleObj.needsContext ? jQuery(sel,                         $that).index(cur) >= 0 : jQuery.find(sel,                         $that, null, [cur]).length;
                    }
                    if (matches[sel]) {
                        matches.push(handleObj);
                    }
                }
                if (matches.length) {
                    handlerQueue.push({
                        elem: cur,
                        handlers: matches
                    });
                }
            }
        }
    }
    // Add the remaining (directly-bound) handlers
    if (delegateCount < handlers.length) {
        handlerQueue.push({
            elem:             $that,
            handlers: handlers.slice(delegateCount)
        });
    }
    return handlerQueue;
}})();