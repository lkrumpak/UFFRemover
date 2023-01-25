(function(){{
    var t = aria.core.JsonValidator.normalize({
        json: aria.core.AppEnvironment.applicationSettings,
        beanName:         $that._cfgPackage
    });
    t ? (    $that._applyEnvironment(e),     $that.$raiseEvent('environmentChanged')) :     $that.$callback(e);
}})();