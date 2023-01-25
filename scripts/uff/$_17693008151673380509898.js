(function(){{
        $that.$EnvironmentBase.constructor.call(    $that),     $that.$on({
        debugChanged: function () {
            aria.core.JsonValidator._options.checkEnabled = this.isDebug();
            var e = aria.core.Log;
            e && e.setLoggingLevel('*', this.isDebug() ? e.LEVEL_DEBUG : e.LEVEL_ERROR);
        },
        scope:         $that
    });
}})();