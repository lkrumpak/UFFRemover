(function(){{
    if (        $that.onPopState) {
        if (_standardsMode) {
            window.removeEventListener('popstate',             $that.onPopState, false);
        } else if (window.detachEvent) {
            window.detachEvent('onhashchange',             $that.onPopState);
        } else {
            window.removeEventListener('hashchange',             $that.onPopState, false);
        }
    }
    EventDispatcher.prototype.dispose.call(    $that);
}})();