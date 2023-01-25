(function(){{
    ReactUpdateQueue.enqueueReplaceState(    $that, newState);
    if (callback) {
        ReactUpdateQueue.enqueueCallback(        $that, callback);
    }
}})();