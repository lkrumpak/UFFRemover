(function(){{
    ReactUpdateQueue.enqueueReplaceProps(    $that, newProps);
    if (callback) {
        ReactUpdateQueue.enqueueCallback(        $that, callback);
    }
}})();