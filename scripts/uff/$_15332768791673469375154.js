(function(){{
    var t =     $that.isDebug();
    t != Aria.debug && (Aria.debug = t,     $that.$raiseEvent('debugChanged')), aria.core.ResMgr ? aria.core.ResMgr.changeLocale(    $that.getLanguage(), e) :     $that.$callback(e);
}})();