(function(){{
    if (        $that.isReady)
        return;
        $that.isReady = !0,     $that._removeListeners(),     $that.$raiseEvent('ready');
}})();