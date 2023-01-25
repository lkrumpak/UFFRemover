(function(){{
    CallbackQueue.release(    $that.reactMountReady);
        $that.reactMountReady = null;
    ReactPutListenerQueue.release(    $that.putListenerQueue);
        $that.putListenerQueue = null;
}})();