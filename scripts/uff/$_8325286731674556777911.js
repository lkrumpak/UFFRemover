(function(){{
    // If we can bind to it...
    if (        $that.unbind &&        $that.unbind !== can.unbind) {
                $that.unbind(ev, cb);
    } else if (isBindableElement(        $that)) {
        $.event.remove(        $that, ev, cb);
    } else {
        // Make it bind-able...
        can.removeEvent.call(        $that, ev, cb);
    }
    return    $that;
}})();