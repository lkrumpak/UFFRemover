(function(){{
    if (lifecycleEvent === 'error')
                $that.handlesOwnErrors = true;
    var bus =     $that.lifecycleEvents[lifecycleEvent] || (0, _transmitter2['default'])();
        $that.lifecycleEvents[lifecycleEvent] = bus;
    return bus.subscribe(handler.bind(    $that));
}})();