(function(){{
    for (var key in xhrCallbacks) {
        xhrCallbacks[key](undefined, true);
    }
}})();