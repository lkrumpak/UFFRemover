(function(){{
    ReactUpdateQueue.enqueueSetProps(    $that, partialProps);
    if (callback) {
        ReactUpdateQueue.enqueueCallback(        $that, callback);
    }
}})();