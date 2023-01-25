(function(){{
        $that.reinitializeTransaction();
        $that.renderToStaticMarkup = renderToStaticMarkup;
        $that.reactMountReady = CallbackQueue.getPooled(null);
        $that.putListenerQueue = ReactPutListenerQueue.getPooled();
}})();