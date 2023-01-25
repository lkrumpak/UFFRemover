(function(){{
    var vm =     $that;
    (vm._events[event] || (vm._events[event] = [])).push(fn);
    // optimize hook:event cost by using a boolean flag marked at registration
    // instead of a hash lookup
    if (hookRE.test(event)) {
        vm._hasHookEvent = true;
    }
    return vm;
}})();