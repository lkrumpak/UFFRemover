(function(){{
    var e = Aria.$frameworkWindow;
    if (e == null) {
                $that._raiseReadyEvent();
        return;
    }
        $that._checkReadyState(!1);
    if (        $that.isReady)
        return;
    var t = e.document, n = aria.core.Browser, r =         $that, i;
    if (e.addEventListener) {
        n.isOpera ? (i = function () {
            r._checkCSSLoaded();
        }, t.addEventListener('DOMContentLoaded', i, !1),         $that._listenersToRemove.push([
            t,
            'removeEventListener',
            'DOMContentLoaded',
            i
        ])) : (i = function () {
            r._raiseReadyEvent();
        }, t.addEventListener('DOMContentLoaded', i, !1),         $that._listenersToRemove.push([
            t,
            'removeEventListener',
            'DOMContentLoaded',
            i
        ]));
        var s = function () {
            r._raiseReadyEvent();
        };
                $that._listenersToRemove.push([
            e,
            'removeEventListener',
            'load',
            s
        ]), e.addEventListener('load', s, !1);
    } else
        e.attachEvent && (e === e.top ?         $that._checkScroll() : r._checkReadyState(!0), i = function () {
            r._raiseReadyEvent();
        },         $that._listenersToRemove.push([
            e,
            'detachEvent',
            'onload',
            i
        ]), e.attachEvent('onload', i));
}})();