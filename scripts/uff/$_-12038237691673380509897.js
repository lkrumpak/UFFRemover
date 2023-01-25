(function(){{
    n = !!n;
    var r = aria.utils.Object.keys(e);
    if (n)
        aria.utils.Json.inject(e,         $that.applicationSettings, !0);
    else if (r.length === 0)
                $that.applicationSettings = {}, r = null;
    else
        for (var i = 0; i < r.length; i++) {
            var s = r[i];
                        $that.applicationSettings[s] = e[s];
        }
    var o = {
        name: 'changingEnvironment',
        changedProperties: r,
        asyncCalls: 1
    };
    o.callback = {
        fn: function () {
            o.asyncCalls--, o.asyncCalls <= 0 && (o.callback.fn = null, o = null, r = null, this.$callback(t));
        },
        scope:         $that
    },     $that.$raiseEvent(o),     $that.$raiseEvent({
        name: 'environmentChanged',
        changedProperties: r
    }),     $that.$callback(o.callback);
}})();