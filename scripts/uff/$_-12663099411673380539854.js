(function(){{
    var bindings =     $that._events[event];
    if (!bindings)
        return;
    for (var method in bindings) {
                $that.unbind(event, method);
    }
}})();