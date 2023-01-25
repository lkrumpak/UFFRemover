(function(){{
    // If this is the last virtual binding for this eventType,
    // remove its global handler from the document.
    --activeDocHandlers[eventType];
    if (!activeDocHandlers[eventType]) {
        $document.unbind(realType, mouseEventCallback);
    }
    if (eventCaptureSupported) {
        // If this is the last virtual mouse binding in existence,
        // remove our document touchstart listener.
        --activeDocHandlers['touchstart'];
        if (!activeDocHandlers['touchstart']) {
            $document.unbind('touchstart', handleTouchStart).unbind('touchmove', handleTouchMove).unbind('touchend', handleTouchEnd).unbind('scroll', handleScroll);
        }
    }
    var $this = $(        $that), bindings = $.data(        $that, dataPropertyName);
    // teardown may be called when an element was
    // removed from the DOM. If this is the case,
    // jQuery core may have already stripped the element
    // of any data bindings so we need to check it before
    // using it.
    if (bindings) {
        bindings[eventType] = false;
    }
    // Unregister the dummy event handler.
    $this.unbind(realType, dummyMouseHandler);
    // If this is the last virtual mouse binding on the
    // element, remove the binding data from the element.
    if (!hasVirtualBindings(        $that)) {
        $this.removeData(dataPropertyName);
    }
}})();