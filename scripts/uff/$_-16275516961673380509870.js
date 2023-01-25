(function(){{
        $that._loggers = [],     $that._loggingLevels = {},     $that._appenders = [];
    var e =         $that, t = aria.core.JsObject.prototype;
    t.$logDebug = function (t, n, r) {
        return e.debug(this.$classpath, t, n, r), '';
    }, Aria.$logDebug = t.$logDebug, t.$logInfo = function (t, n, r) {
        return e.info(this.$classpath, t, n, r), '';
    }, Aria.$logInfo = t.$logInfo, t.$logWarn = function (t, n, r) {
        return e.warn(this.$classpath, t, n, r), '';
    }, Aria.$logWarn = t.$logWarn, t.$logError = function (t, n, r) {
        return e.error(this.$classpath, t, n, r), '';
    }, Aria.$logError = t.$logError,     $that.resetLoggingLevels(),     $that.setLoggingLevel('*', Aria.debug ?     $that.LEVEL_DEBUG :     $that.LEVEL_ERROR),     $that.addAppender(new aria.core.log.DefaultAppender());
}})();