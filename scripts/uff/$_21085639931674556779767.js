(function(){{
    var event =     $that.nativeEvent;
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
        $that.isPropagationStopped = emptyFunction.thatReturnsTrue;
}})();