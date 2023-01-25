(function(){{
    var vm =     $that;
    // all
    if (!arguments.length) {
        vm._events = Object.create(null);
        return vm;
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
        return vm;
    }
    if (arguments.length === 1) {
        vm._events[event] = null;
        return vm;
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
            cbs.splice(i, 1);
            break;
        }
    }
    return vm;
}})();