(function(){{
    while (listeners.length) {
        listeners.pop().cancel();
    }
}})();