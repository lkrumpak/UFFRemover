(function(){{
    var vm =     $that;
    var cbs = vm._events[event];
    if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        for (var i = 0, l = cbs.length; i < l; i++) {
            cbs[i].apply(vm, args);
        }
    }
    return vm;
}})();