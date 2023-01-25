(function(){{
    var e = Aria.FRAMEWORK_PREFIX + 'isDisposed', t = function (e, t, r, i) {
            for (var s in e[t])
                e[t].hasOwnProperty(s) && n(e[t], s, r, i);
        }, n = function (e, t, n, r, i, s) {
            if (e == null)
                return;
            var o = e[t];
            if (o) {
                var u = o.length, a = !1, f = null, l;
                for (var c = 0; c < u; c++) {
                    l = o[c], a = (!i || l.src == i) && (!n || n == l.scope) && (!r || r == l.fn);
                    if (a) {
                        l.removed = !0, o.splice(c, 1);
                        if (s)
                            break;
                        c--, u--;
                    }
                }
                o.length === 0 && (e[t] = null, delete e[t]);
            }
        }, r = function (e) {
            var t = aria.utils.String.capitalize(e.method), n = this['on' + t + e.step];
            if (n)
                return n.call(this, e);
            n = this['on' + e.method + e.step];
            if (n)
                return n.call(this, e);
        }, i = function (e, t, n) {
            if (n >= t.nbInterceptors)
                return this[t.method].apply(this, e);
            var r = t.interceptors[n];
            if (r.removed)
                return i.call(this, o.args, t, n + 1);
            var o = {
                    step: 'CallBegin',
                    method: t.method,
                    args: e,
                    cancelDefault: !1,
                    returnValue: null
                }, u = t.asyncCbParam;
            if (u != null) {
                var a = {
                    fn: s,
                    scope: this,
                    args: {
                        info: o,
                        interc: r,
                        origCb: e[u]
                    }
                };
                e[u] = a, e.length <= u && (e.length = u + 1), o.callback = a;
            }
            return this.$callback(r, o), o.cancelDefault || (o.returnValue = i.call(this, o.args, t, n + 1), o.step = 'CallEnd', delete o.cancelDefault, this.$callback(r, o)), o.returnValue;
        }, s = function (e, t) {
            var n = t.interc;
            if (n.removed)
                return this.$callback(t.origCb, e);
            var r = t.info;
            return r.step = 'Callback', r.callback = t.origCb, r.callbackResult = e, r.cancelDefault = !1, r.returnValue = null, this.$callback(n, r), r.cancelDefault ? r.returnValue : this.$callback(t.origCb, r.callbackResult);
        }, o = function (e, t) {
            var n = 'on' + aria.utils.String.capitalize(e);
            return t[n + 'CallBegin'] || t[n + 'Callback'] || t[n + 'CallEnd'] || t['on' + e + 'CallBegin'] || t['on' + e + 'Callback'] || t['on' + e + 'CallEnd'] ? !0 : !1;
        }, u = function (e, t, n) {
            var r = n || {};
            for (var i in e)
                e.hasOwnProperty(i) && (r[i] || (r[i] = [])).push(t);
            return r;
        }, a = function (e, t, n) {
            var i = n || {}, s, u, a;
            for (var f in e)
                e.hasOwnProperty(f) && o(f, t) && (i[f] || (i[f] = [])).push({
                    fn: r,
                    scope: t
                });
            return i;
        };
    Aria.classDefinition({
        $classpath: 'aria.core.JsObject',
        $constructor: function () {
        },
        $destructor: function () {
            this[e] = !0;
        },
        $statics: {
            UNDECLARED_EVENT: 'undeclared event name: %1',
            MISSING_SCOPE: 'scope property is mandatory when adding or removing a listener (event: %1)',
            INTERFACE_NOT_SUPPORTED: 'The \'%1\' interface is not supported on this object (of type \'%2\').',
            ASSERT_FAILURE: 'Assert #%1 failed in %2',
            CALLBACK_ERROR: 'An error occured while processing a callback function: \ncalling class: %1\ncalled class: %2'
        },
        $prototype: {
            $init: function (e, t, n) {
                e.$on = e.$addListeners;
            },
            $assert: function (e, t) {
                return t ? !0 : (this.$logError(this.ASSERT_FAILURE, [
                    e,
                    this.$classpath
                ]), !1);
            },
            $dispose: function () {
                this.$destructor(), this._listeners && (this._listeners = null, delete this._listeners), this.__$interceptors && (this.__$interceptors = null, delete this.__$interceptors), this.__$interfaces && aria.core.Interfaces.disposeInterfaces(this);
            },
            $logTimestamp: Aria.empty,
            $startMeasure: Aria.empty,
            $stopMeasure: Aria.empty,
            $logDebug: function (e, t, n) {
                return '';
            },
            $logInfo: function (e, t, n) {
                return '';
            },
            $logWarn: function (e, t, n) {
                return '';
            },
            $logError: function (e, t, n) {
                return Aria.$global.console && (typeof t == 'string' && (t = [t]), Aria.$global.console.error(e.replace(/%[0-9]+/g, function (e) {
                    return t[parseInt(e.substring(1), 10) - 1];
                }), n)), '';
            },
            $callback: function (e, t, n) {
                if (!e)
                    return;
                if (e.$Callback)
                    return e.call(t);
                var r = e.scope, i;
                r = r ? r : this, e.fn ? i = e.fn : i = e, typeof i == 'string' && (i = r[i]);
                var s = e.apply === !0 && e.args && Object.prototype.toString.apply(e.args) === '[object Array]' ? e.args : [e.args], o = e.resIndex === undefined ? 0 : e.resIndex;
                o > -1 && s.splice(o, 0, t);
                try {
                    return Function.prototype.apply.call(i, r, s);
                } catch (u) {
                    this.$logError(n || this.CALLBACK_ERROR, [
                        this.$classpath,
                        r.$classpath
                    ], u);
                }
            },
            $normCallback: function (e) {
                var t = e.scope, n;
                return t = t ? t : this, e.fn ? n = e.fn : n = e, typeof n == 'string' && (n = t[n]), {
                    fn: n,
                    scope: t,
                    args: e.args,
                    resIndex: e.resIndex,
                    apply: e.apply
                };
            },
            $alert: function () {
                var e = [], t;
                e.push('## ' + this.$classpath + ' ## ');
                for (var n in this)
                    this.hasOwnProperty(n) && (t = typeof this[n], t == 'object' || t == 'function' ? e.push(n += ':[' + t + ']') : t == 'string' ? e.push(n += ':"' + this[n] + '"') : e.push(n += ':' + this[n]));
                Aria.$window.alert(e.join('\n')), e = null;
            },
            toString: function () {
                return '[' + this.$classpath + ']';
            },
            $interface: function (e) {
                return aria.core.Interfaces.getInterface(this, e);
            },
            $addInterceptor: function (e, t) {
                var n = this.$interfaces[e];
                if (!n) {
                    this.$logError(this.INTERFACE_NOT_SUPPORTED, [
                        e,
                        this.$classpath
                    ]);
                    return;
                }
                var r = this.__$interceptors;
                r == null && (r = {}, this.__$interceptors = r);
                var i = aria.utils.Type.isCallback(t) ? u : a, s = n.prototype.$interfaces;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var f = i(s[o].interfaceDefinition.$interface, t, r[o]);
                        r[o] = f;
                    }
            },
            $removeInterceptors: function (e, n, r) {
                var i = this.$interfaces[e], s = this.__$interceptors;
                if (!i || !s)
                    return;
                var o = i.prototype.$interfaces;
                for (var u in o)
                    o.hasOwnProperty(u) && t(s, u, n, r);
            },
            $call: function (e, t, n, r) {
                var s;
                return this.__$interceptors == null || this.__$interceptors[e] == null || (s = this.__$interceptors[e][t]) == null ? this[t].apply(this, n) : i.call(this, n, {
                    interceptors: s,
                    nbInterceptors: s.length,
                    method: t,
                    asyncCbParam: r
                }, 0);
            },
            $addListeners: function (e, t) {
                var n = e.scope ? e.scope : null, r = t ? t : this, i;
                for (var s in e) {
                    if (!e.hasOwnProperty(s))
                        continue;
                    i = e[s];
                    if (s == 'scope')
                        continue;
                    if (s != '*' && r.$events[s] == null) {
                        this.$logError(this.UNDECLARED_EVENT, s, r.$classpath);
                        continue;
                    }
                    if (i.$Callback)
                        i = {
                            fn: function (e, t) {
                                t.call(e);
                            },
                            scope: this,
                            args: i
                        };
                    else if (!i.fn) {
                        if (!n) {
                            this.$logError(this.MISSING_SCOPE, s);
                            continue;
                        }
                        i = {
                            fn: i,
                            scope: n,
                            once: e[s].listenOnce
                        };
                    } else {
                        i = {
                            fn: i.fn,
                            scope: i.scope,
                            args: i.args,
                            once: e[s].listenOnce
                        }, i.scope || (i.scope = n);
                        if (!i.scope) {
                            this.$logError(this.MISSING_SCOPE, s);
                            continue;
                        }
                    }
                    this._listeners == null ? (this._listeners = {}, this._listeners[s] = []) : this._listeners[s] == null && (this._listeners[s] = []), i.src = r, this._listeners[s].push(i);
                }
                n = i = s = null;
            },
            $removeListeners: function (e, t) {
                if (this._listeners == null)
                    return;
                var r = e.scope ? e.scope : null, i;
                for (var s in e) {
                    if (!e.hasOwnProperty(s))
                        continue;
                    if (s == 'scope')
                        continue;
                    if (this._listeners[s]) {
                        var o = e[s];
                        if (typeof o == 'function') {
                            if (r == null) {
                                this.$logError(this.MISSING_SCOPE, s);
                                continue;
                            }
                            n(this._listeners, s, r, o, t);
                        } else {
                            o.scope == null && (o.scope = r);
                            if (o.scope == null) {
                                this.$logError(this.MISSING_SCOPE, s);
                                continue;
                            }
                            n(this._listeners, s, o.scope, o.fn, t, o.firstOnly);
                        }
                    }
                }
                r = i = o = null;
            },
            $unregisterListeners: function (e, t) {
                if (this._listeners == null)
                    return;
                if (e == null && t == null)
                    for (var r in this._listeners) {
                        if (!this._listeners.hasOwnProperty(r))
                            continue;
                        this._listeners[r] = null, delete this._listeners[r];
                    }
                else
                    for (var r in this._listeners) {
                        if (!this._listeners.hasOwnProperty(r))
                            continue;
                        n(this._listeners, r, e, null, t);
                    }
                r = null;
            },
            $onOnce: function (e, t) {
                for (var n in e)
                    e.hasOwnProperty(n) && (e[n].listenOnce = !0);
                this.$addListeners(e, t);
            },
            $raiseEvent: function (e) {
                if (this._listeners == null)
                    return;
                var t = '', n = !1;
                typeof e == 'string' ? t = e : (t = e.name, n = !0);
                if (t == null || this.$events[t] == null)
                    this.$logError(this.UNDECLARED_EVENT, [
                        t,
                        this.$classpath
                    ]);
                else {
                    var r = [
                            t,
                            '*'
                        ], i = null, s = this._listeners;
                    for (var o = 0; o < 2; o++) {
                        var u = s[r[o]];
                        if (u) {
                            i || (i = n ? e : {}, i.name = t), u = u.slice(0);
                            var a = u.length, f, l;
                            for (var c = 0; a > c; c++) {
                                f = u[c], l = f.src;
                                if (!f.removed && (o === 0 || l.$events[t] != null)) {
                                    i.src = l;
                                    if (f.once) {
                                        delete f.once;
                                        var h = {};
                                        h[i.name] = f, this.$removeListeners(h);
                                    }
                                    this.$callback(f, i);
                                }
                            }
                            i.src = null;
                        }
                    }
                    s = u = a = null;
                }
            }
        }
    });
}})();