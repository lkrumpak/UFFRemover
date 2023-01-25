(function(){{
        $that.defaultPrevented = true;
    var event =     $that.nativeEvent;
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
        $that.isDefaultPrevented = emptyFunction.thatReturnsTrue;
}})();