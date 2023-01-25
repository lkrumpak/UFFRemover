(function(){{
        $that.resetLoggingLevels(),     $that.clearAppenders();
    var e = aria.core.JsObject.prototype, t = Aria.$window.alert;
    e.$logError = function (e, n, r) {
        t([
            'Error after aria.core.Log is disposed:\nin:',
            this.$classpath,
            '\nmsg:',
            e
        ].join(''));
    }, Aria.$logError = e.$logError;
    var n = function () {
    };
    e.$logDebug = n, Aria.$logDebug = n, e.$logInfo = n, Aria.$logInfo = n, e.$logWarn = n, Aria.$logWarn = n;
}})();