(function(){{
    if (!Router || !Router.listeners) {
        return;
    }
    var listeners = Router.listeners;
    for (var i = listeners.length - 1; i >= 0; i--) {
        if (listeners[i] === fn) {
            listeners.splice(i, 1);
        }
    }
}})();