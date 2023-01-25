(function(){{
    var e = Aria.$global.console;
    Aria.classDefinition({
        $classpath: 'aria.core.log.DefaultAppender',
        $prototype: e ? {
            _formatClassName: function (e) {
                return '[' + e + '] ';
            },
            _inspectObject: function (t) {
                t && typeof t == 'object' && e.dir && e.dir(t);
            },
            debug: function (t, n, r, i) {
                e.debug ? e.debug(this._formatClassName(t) + n) : e.log && e.log(this._formatClassName(t) + n), this._inspectObject(i);
            },
            info: function (t, n, r, i) {
                e.info ? e.info(this._formatClassName(t) + n) : e.log && e.log(this._formatClassName(t) + n), this._inspectObject(i);
            },
            warn: function (t, n, r, i) {
                e.warn ? e.warn(this._formatClassName(t) + n) : e.log && e.log(this._formatClassName(t) + n), this._inspectObject(i);
            },
            error: function (t, n, r, i) {
                var s = this._formatClassName(t) + n;
                i ? e.error(s + '\n', i) : e.error(s);
            }
        } : {
            debug: function () {
            },
            info: function () {
            },
            warn: function () {
            },
            error: function () {
            }
        }
    });
}})();