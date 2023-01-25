(function(){{
    ReactUpdateQueue.enqueueForceUpdate(    $that);
    if (callback) {
        ReactUpdateQueue.enqueueCallback(        $that, callback);
    }
}})();