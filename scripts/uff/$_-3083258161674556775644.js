(function(){{
        $that.isReady ?     $that.$callback(e) :     $that.$on({
        ready: e,
        scope:         $that
    }),     $that._isListening || (    $that._isListening = !0,     $that._listen());
}})();