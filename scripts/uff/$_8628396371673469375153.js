(function(){{
        $that.$assert(9,     $that._cfgPackage != null),     $that._localDefCfg = {};
    var e = aria.core.JsonValidator.normalize({
        json:         $that._localDefCfg,
        beanName:         $that._cfgPackage
    });
        $that.$assert(15, e),     $that._changingEnvironment({
        changedProperties: null,
        asyncCalls: 0,
        callback: null
    }), aria.core.AppEnvironment.$on({
        changingEnvironment:         $that._changingEnvironment,
        scope:         $that
    });
}})();