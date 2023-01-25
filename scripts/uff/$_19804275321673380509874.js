(function(){{
    var arrayUtils, typeUtils, jsonUtils, parProp, res = [], __getListenerMetaName = function (e, t) {
            var n = t ? jsonUtils.META_FOR_RECLISTENERS : jsonUtils.META_FOR_LISTENERS;
            return e != null && (n += '_' + e), n;
        }, __isValidContainer = function (e) {
            return typeUtils.isContainer(e) && !typeUtils.isHTMLElement(e) && !e.$JsObject;
        }, __removeLinkToParent = function (e, t, n) {
            var r = e ? e[parProp] : null;
            if (r)
                for (var i = 0, s; s = r[i]; i++)
                    if (s.parent == t && s.property == n) {
                        r.splice(i, 1);
                        break;
                    }
        }, __changeLinkToParent = function (e, t, n, r) {
            var i = e ? e[parProp] : null;
            if (i)
                for (var s = 0, o; o = i[s]; s++)
                    if (o.parent == t && o.property == n) {
                        o.property = r;
                        break;
                    }
        }, __addLinkToParent = function (e, t, n) {
            __isValidContainer(e) && (__checkBackRefs(e), e[parProp].push({
                parent: t,
                property: n
            }));
        }, __includePropForBackRef = function (e) {
            return e != jsonUtils.OBJECT_PARENT_PROPERTY && e != jsonUtils.META_FOR_LISTENERS && e != jsonUtils.META_FOR_RECLISTENERS;
        }, __checkBackRefs = function (e) {
            if (e[parProp])
                return;
            e[parProp] = [];
            for (var t in e)
                if (e.hasOwnProperty(t) && __includePropForBackRef(t)) {
                    var n = e[t];
                    __isValidContainer(n) && (__checkBackRefs(n), n[parProp].push({
                        parent: e,
                        property: t
                    }));
                }
        }, __cleanUpRecMarkers = function (e) {
            var t = jsonUtils.TEMP_REC_MARKER;
            if (e[t]) {
                e[t] = !1, delete e[t];
                var n = e[jsonUtils.OBJECT_PARENT_PROPERTY];
                if (n)
                    for (var r = 0, i = n.length; r < i; r++)
                        __cleanUpRecMarkers(n[r].parent);
            }
        }, __appendListeners = function (e, t) {
            return e != null && (t || (t = []), t.push.apply(t, e)), t;
        }, __retrieveListeners = function (e, t, n, r) {
            t != null && (r = __retrievePropertySpecificListeners(e, t, n, r));
            if (e[jsonUtils.TEMP_REC_MARKER])
                return r;
            r = __retrievePropertySpecificListeners(e, null, n, r);
            var i = e[jsonUtils.OBJECT_PARENT_PROPERTY];
            if (i) {
                e[jsonUtils.TEMP_REC_MARKER] = !0;
                for (var s = 0, o, u; o = i[s]; s++)
                    r = __retrieveListeners(o.parent, o.property, !0, r);
                n || __cleanUpRecMarkers(e);
            }
            return r;
        }, __retrievePropertySpecificListeners = function (e, t, n, r) {
            return r = __appendListeners(e[__getListenerMetaName(t, !0)], r), n || (r = __appendListeners(e[__getListenerMetaName(t)], r)), r;
        }, __callListeners = function (e, t, n) {
            for (var r = 0, i = e.length; r < i; r++) {
                var s = e[r];
                if (s == n || !s)
                    continue;
                var o = s.fn;
                o && o.call(s.scope, t, s.args);
            }
        }, __notifyListeners = function (e, t, n, r) {
            var i = __retrieveListeners(e, t);
            i && (n.dataHolder = e, n.dataName = t, __callListeners(i, n, r));
        }, __elemCopy = function (e, t, n, r, i) {
            typeUtils.isObject(e) || typeUtils.isArray(e) ? r ? t[n] = aria.utils.Json.copy(e, !0, null, i) : t[n] = e : typeUtils.isDate(e) ? t[n] = new Date(e.getTime()) : t[n] = e;
        };
    Aria.classDefinition({
        $classpath: 'aria.utils.Json',
        $dependencies: ['aria.utils.json.JsonSerializer'],
        $singleton: !0,
        $constructor: function () {
            jsonUtils = this, arrayUtils = aria.utils.Array, typeUtils = aria.utils.Type, parProp = this.OBJECT_PARENT_PROPERTY, this.__defaultJsonSerializer = new aria.utils.json.JsonSerializer(!0);
        },
        $destructor: function () {
            jsonUtils = null, arrayUtils = null, typeUtils = null, parProp = null, res = null, this.__defaultJsonSerializer.$dispose(), this.__defaultJsonSerializer = null;
        },
        $statics: {
            META_FOR_LISTENERS: Aria.FRAMEWORK_PREFIX + 'listener',
            META_FOR_RECLISTENERS: Aria.FRAMEWORK_PREFIX + 'reclistener',
            OBJECT_PARENT_PROPERTY: Aria.FRAMEWORK_PREFIX + 'parent',
            TEMP_REC_MARKER: Aria.FRAMEWORK_PREFIX + 'tempRecMarker',
            VALUE_CHANGED: 0,
            KEY_ADDED: 1,
            KEY_REMOVED: 2,
            SPLICE: 3,
            INVALID_JSON_CONTENT: 'An error occured while loading an invalid JSON content:\ncontext: %1\nJSON content:\n%2',
            NOT_OF_SPECIFIED_DH_TYPE: 'Invalid data holder type: expected to be an object or an array. Data holder provided: ',
            INVALID_SPLICE_PARAMETERS: 'Invalid splice parameters.',
            INVALID_JSON_SERIALIZER_INSTANCE: 'The provided instance of JSON serializer does not have a serialize method.'
        },
        $prototype: {
            convertToJsonString: function (e, t, n) {
                return n ? 'serialize' in n ? n.serialize(e, t) : (this.$logError(this.INVALID_JSON_SERIALIZER_INSTANCE), null) : this.__defaultJsonSerializer.serialize(e, t);
            },
            splice: function (e, t, n) {
                var r = arguments.length - 3;
                if (!(typeUtils.isArray(e) && typeUtils.isNumber(t) && typeUtils.isNumber(n) && r >= 0 && n >= 0))
                    return this.$logError(this.INVALID_SPLICE_PARAMETERS, [], arguments), null;
                var i = e.length;
                t < 0 && (t = i + t, t < 0 && (t = 0)), t > i && (t = i), t + n > i && (n = i - t);
                if (r === 0 && n === 0)
                    return [];
                var s = Array.prototype, o = s.splice.apply(e, s.slice.call(arguments, 1)), u = e.length;
                this.$assert(526, n == o.length), this.$assert(527, i + r - n == u);
                if (e[parProp]) {
                    if (n > 0)
                        for (var a = n - 1; a >= 0; a--)
                            __removeLinkToParent(o[a], e, t + a);
                    if (r > 0)
                        for (var a = t + r - 1; a >= t; a--)
                            __addLinkToParent(e[a], e, a);
                    if (r != n)
                        for (var f = t + r, l = t + n; f < u; f++, l++)
                            __changeLinkToParent(e[f], e, l, f);
                }
                var c = null, h = r == n ? t + r : Math.max(i, u);
                for (var a = t; a < h; a++) {
                    c = __retrievePropertySpecificListeners(e, a);
                    if (c) {
                        var p = {
                            dataHolder: e,
                            dataName: a
                        };
                        a >= u ? p.change = this.KEY_REMOVED : (p.change = this.VALUE_CHANGED, p.newValue = e[a]), a < t + n ? p.oldValue = o[a - t] : p.oldValue = e[a - n + r], __callListeners(c, p);
                    }
                }
                return c = __retrieveListeners(e), c && __callListeners(c, {
                    change: this.SPLICE,
                    dataHolder: e,
                    index: t,
                    removed: o,
                    added: s.slice.call(arguments, 3)
                }), o;
            },
            deleteKey: function (e, t, n, r) {
                if (!__isValidContainer(e)) {
                    if (r)
                        throw { code: this.NOT_OF_SPECIFIED_DH_TYPE };
                    this.$logError(this.NOT_OF_SPECIFIED_DH_TYPE, null, e);
                    return;
                }
                if (e.hasOwnProperty(t)) {
                    var i = e[t];
                    delete e[t], e[parProp] && __includePropForBackRef(t) && __removeLinkToParent(i, e, t), __notifyListeners(e, t, {
                        change: this.KEY_REMOVED,
                        oldValue: i
                    }, n);
                }
            },
            setValue: function (e, t, n, r, i) {
                if (!__isValidContainer(e)) {
                    if (i)
                        throw { code: this.NOT_OF_SPECIFIED_DH_TYPE };
                    this.$logError(this.NOT_OF_SPECIFIED_DH_TYPE, null, e);
                    return;
                }
                var s = e.hasOwnProperty(t), o = e[t];
                e[t] = n;
                if (o !== n || !s)
                    e[parProp] && __includePropForBackRef(t) && (__removeLinkToParent(o, e, t), __addLinkToParent(n, e, t)), __notifyListeners(e, t, {
                        change: s ? this.VALUE_CHANGED : this.KEY_ADDED,
                        newValue: n,
                        oldValue: o
                    }, r);
                return n;
            },
            getValue: function (e, t, n) {
                return !e || !e[t] ? n : e[t];
            },
            addListener: function (e, t, n, r, i) {
                if (typeUtils.isObject(t))
                    return this.addListener(e, null, t, n, r);
                var s = __getListenerMetaName(t, i);
                if (!__isValidContainer(e)) {
                    if (r)
                        throw { code: this.NOT_OF_SPECIFIED_DH_TYPE };
                    this.$logError(this.NOT_OF_SPECIFIED_DH_TYPE, null, e);
                    return;
                }
                if (!e[s])
                    e[s] = [n];
                else {
                    var o = e[s];
                    if (arrayUtils.indexOf(o, n) > -1)
                        return;
                    o.push(n);
                }
                i && __checkBackRefs(e);
            },
            removeListener: function (e, t, n, r) {
                if (typeUtils.isObject(t))
                    return this.removeListener(e, null, t, n);
                var i = __getListenerMetaName(t, r);
                if (!e || e[i] == null)
                    return;
                var s = e[i], o = arrayUtils.indexOf(s, n);
                o > -1 && (s.length == 1 ? (e[i] = null, delete e[i]) : s.splice(o, 1));
            },
            copy: function (e, t, n, r) {
                t = t !== !1;
                var i = !1, s, o;
                typeUtils.isArray(e) ? (s = [], i = !0) : typeUtils.isObject(e) && (s = {}, i = !0);
                if (i) {
                    for (var u in e)
                        if (e.hasOwnProperty(u)) {
                            if (u.indexOf(':') != -1) {
                                if (!r)
                                    continue;
                                if (this.isMetadata(u))
                                    continue;
                            }
                            if (n && !arrayUtils.contains(n, u))
                                continue;
                            t ? s[u] = this.copy(e[u], t, null, r) : s[u] = e[u];
                        }
                } else
                    typeUtils.isDate(e) ? s = new Date(e.getTime()) : s = e;
                return s;
            },
            load: function (str, ctxt, errMsg) {
                var window = null, document = null, frames = null, res = null;
                try {
                    str = ('' + str).replace(/^\s/, ''), res = eval('(' + str + ')');
                } catch (ex) {
                    res = null, errMsg || (errMsg = this.INVALID_JSON_CONTENT);
                    var cp = 'unspecified';
                    ctxt && ctxt.$classpath && (ctxt = ctxt.$classpath), this.$logError(errMsg, [
                        ctxt,
                        str
                    ], ex);
                }
                return res;
            },
            inject: function (e, t, n) {
                n = n === !0;
                var r = typeUtils.isArray(e) && typeUtils.isArray(t), i = typeUtils.isObject(e) && typeUtils.isObject(t), s;
                if (!r && !i)
                    return !1;
                if (r)
                    if (!n)
                        for (var o = 0, u = e.length; o < u; o++)
                            t.push(e[o]);
                    else
                        for (var o = 0, u = e.length; o < u; o++)
                            s = e[o], t[o] ? typeUtils.isContainer(s) ? this.inject(s, t[o], !0) || (t[o] = s) : typeUtils.isDate(s) ? t[o] = new Date(s.getTime()) : t[o] = s : t[o] = s;
                else if (i)
                    for (var a in e)
                        e.hasOwnProperty(a) && (s = e[a], !t[a] || !n ? this.setValue(t, a, s) : typeUtils.isContainer(s) ? this.inject(s, t[a], !0) || this.setValue(t, a, s) : typeUtils.isDate(s) ? this.setValue(t, a, new Date(s.getTime())) : this.setValue(t, a, s));
                return !0;
            },
            contains: function (e, t) {
                var n = typeUtils.isArray(e), r = typeUtils.isObject(e), i = typeUtils.isArray(t), s = typeUtils.isObject(t);
                if (n && i) {
                    for (var o = 0, u = t.length; o < u; o++)
                        if (!this.contains(e[o], t[o]))
                            return !1;
                } else {
                    if (!r || !s) {
                        var f = typeUtils.isDate(e) && typeUtils.isDate(t);
                        return f ? t.getTime() === e.getTime() : t === e;
                    }
                    for (var a in t)
                        if (t.hasOwnProperty(a)) {
                            if (a.match(/:/))
                                continue;
                            if (t.hasOwnProperty(a) && !this.contains(e[a], t[a]))
                                return !1;
                        }
                }
                return !0;
            },
            add: function (e, t, n) {
                n == null && (n = e.length), this.splice(e, n, 0, t);
            },
            removeAt: function (e, t) {
                this.splice(e, t, 1);
            },
            equals: function (e, t) {
                return this.contains(e, t) && this.contains(t, e);
            },
            isMetadata: function (e) {
                return aria.utils.Type.isString(e) ? e.indexOf(Aria.FRAMEWORK_PREFIX) === 0 : !1;
            },
            removeMetadata: function (e) {
                if (!e || !__isValidContainer(e))
                    return e;
                var t = typeUtils.isArray(e) ? [] : {};
                for (var n in e)
                    this.isMetadata(n) || (t[n] = this.removeMetadata(e[n]));
                return t;
            }
        }
    });
}})();