(function(){{
    // Add a cross-platform `removeEventListener` shim for older browsers.
    var removeEventListener = window.removeEventListener;
    // Remove window listeners.
    if (        $that._hasPushState) {
        removeEventListener('popstate',         $that.checkUrl, false);
    } else if (        $that._wantsHashChange &&        $that._hasHashChange) {
        removeEventListener('hashchange',         $that.checkUrl, false);
    }
    // Some environments will throw when clearing an undefined interval.
    if (        $that._checkUrlInterval)
        clearInterval(        $that._checkUrlInterval);
    History.started = false;
}})();