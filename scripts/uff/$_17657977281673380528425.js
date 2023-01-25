(function(){{
    // Add a cross-platform `removeEventListener` shim for older browsers.
    var removeEventListener = window.removeEventListener || function (eventName, listener) {
        return detachEvent('on' + eventName, listener);
    };
    // Remove window listeners.
    if (        $that._usePushState) {
        removeEventListener('popstate',         $that.checkUrl, false);
    } else if (        $that._useHashChange && !        $that.iframe) {
        removeEventListener('hashchange',         $that.checkUrl, false);
    }
    // Clean up the iframe if necessary.
    if (        $that.iframe) {
        document.body.removeChild(        $that.iframe);
                $that.iframe = null;
    }
    // Some environments will throw when clearing an undefined interval.
    if (        $that._checkUrlInterval)
        clearInterval(        $that._checkUrlInterval);
    History.started = false;
}})();