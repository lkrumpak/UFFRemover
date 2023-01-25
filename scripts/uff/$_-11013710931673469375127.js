(function(){{
    var e = Array.prototype, t;
    Aria.classDefinition({
        $classpath: 'aria.utils.Array',
        $singleton: !0,
        $constructor: function () {
            t = this;
        },
        $destructor: function () {
            e = null, t = null;
        },
        $prototype: {
            indexOf: e.indexOf ? function (e, t) {
                return e.indexOf(t);
            } : function (e, t) {
                var n = e.length;
                for (var r = 0; r < n; r++)
                    if (r in e && e[r] === t)
                        return r;
                return -1;
            },
            contains: function (e, n) {
                return t.indexOf(e, n) != -1;
            },
            clone: function (e) {
                var t = e.slice(0);
                return t;
            },
            remove: function (e, n) {
                var r = t.indexOf(e, n);
                return r > -1 ? (t.removeAt(e, r), !0) : !1;
            },
            removeAt: function (e, t) {
                return e.splice(t, 1).length == 1;
            },
            isEmpty: function (e) {
                return e.length === 0;
            },
            filter: e.filter ? function (e, t, n) {
                return e.filter(t, n);
            } : function (e, n, r) {
                var i = t.clone(e), s = [];
                r = r || e;
                var o = i.length;
                for (var u = 0; u < o; u++) {
                    var a = i[u];
                    n.call(r, a, u, e) && s.push(a);
                }
                return s;
            },
            forEach: e.forEach ? function (e, t, n) {
                return e.forEach(t, n);
            } : function (e, n, r) {
                var i = t.clone(e), s = [];
                r = r || e;
                var o = i.length;
                for (var u = 0; u < o; u++)
                    n.call(r, i[u], u, e);
                return s;
            },
            extractValuesFromMap: function (e) {
                var t = [];
                for (var n in e)
                    e.hasOwnProperty(n) && t.push(e[n]);
                return t;
            }
        }
    });
}})();