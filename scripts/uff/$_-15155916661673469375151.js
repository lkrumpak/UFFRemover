(function(){{
    var e, t, n = function (t, n) {
            e._logError(e.INVALID_TYPE_VALUE, [
                t.typeName,
                n.beanDef[e._MD_TYPENAME],
                n.value,
                n.path
            ]);
        }, r = function (t, n) {
            if (!e._options.checkInheritance)
                return !0;
            var r = n;
            while (!r[e._MD_BUILTIN]) {
                if (t == r)
                    return !0;
                r = r[e._MD_PARENTDEF];
            }
            return e._logError(e.INHERITANCE_EXPECTED, [
                n[e._MD_TYPENAME],
                t[e._MD_TYPENAME]
            ]), !1;
        }, i = function (t, n, i) {
            var s = t.$contentType, o = null, u = t[e._MD_PARENTDEF];
            if (!u[e._MD_BUILTIN]) {
                o = u.$contentType;
                if (s == null) {
                    t.$contentType = o;
                    return;
                }
            } else if (s == null) {
                e._logError(e.MISSING_CONTENTTYPE, [
                    t[e._MD_BASETYPE].typeName,
                    t[e._MD_TYPENAME]
                ]), t[e._MD_BASETYPE] = e._typeError;
                return;
            }
            e._preprocessBean(s, n + '.$contentType', i), o != null && r(o, s);
        }, s = function (t, n, i) {
            var s = t.$keyType, o = null, u = t[e._MD_PARENTDEF];
            if (!u[e._MD_BUILTIN]) {
                o = u.$keyType;
                if (s == null) {
                    t.$keyType = o;
                    return;
                }
            } else if (s == null)
                return;
            e._preprocessBean(s, n + '.$keyType', i), o != null && r(o, s);
            if (s[e._MD_BASETYPE].typeName != 'String') {
                e._logError(e.INHERITANCE_EXPECTED, [
                    s[e._MD_TYPENAME],
                    e._BASE_TYPES_PACKAGE + '.String'
                ]);
                return;
            }
        }, o = function (t) {
            if (typeof t.value != 'string')
                return n(this, t);
            var r = t.beanDef;
            while (!r[e._MD_BUILTIN]) {
                var i = r.$regExp;
                if (i != null && !i.test(t.value))
                    return e._logError(e.REGEXP_FAILED, [
                        t.value,
                        t.path,
                        i,
                        r[e._MD_TYPENAME]
                    ]);
                r = r[e._MD_PARENTDEF];
            }
        }, u = function (t) {
            var n = t[e._MD_PARENTDEF];
            typeof n.$minValue != 'undefined' && (typeof t.$minValue == 'undefined' ? t.$minValue = n.$minValue : t.$minValue < n.$minValue && e._logError(e.NUMBER_INVALID_INHERITANCE, [
                '$minValue',
                t[e._MD_TYPENAME]
            ])), typeof n.$maxValue != 'undefined' && (typeof t.$maxValue == 'undefined' ? t.$maxValue = n.$maxValue : t.$maxValue > n.$maxValue && e._logError(e.NUMBER_INVALID_INHERITANCE, [
                '$maxValue',
                t[e._MD_TYPENAME]
            ])), typeof t.$minValue != 'undefined' && typeof t.$maxValue != 'undefined' && t.$minValue > t.$maxValue && e._logError(e.NUMBER_INVALID_RANGE, [
                t[e._MD_TYPENAME],
                t.$minValue,
                t.$maxValue
            ]);
        }, a = function (t) {
            var r = t.value, i = t.beanDef;
            if (typeof r != 'number')
                return n(this, t);
            if (typeof i.$minValue != 'undefined' && r < i.$minValue)
                return e._logError(e.NUMBER_RANGE, [
                    t.value,
                    t.path,
                    '$minValue',
                    i.$minValue
                ]);
            if (typeof i.$maxValue != 'undefined' && r > i.$maxValue)
                return e._logError(e.NUMBER_RANGE, [
                    t.value,
                    t.path,
                    '$maxValue',
                    i.$maxValue
                ]);
        }, f = [
            {
                typeName: 'String',
                process: o
            },
            {
                typeName: 'Boolean',
                process: function (e) {
                    if (typeof e.value != 'boolean')
                        return n(this, e);
                }
            },
            {
                typeName: 'JsonProperty',
                process: function (e) {
                    if (typeof e.value == 'string') {
                        if (Aria.isJsReservedWord(e.value) || !/^([a-zA-Z_\$][\w\$]*(:[\w\$]*)?)|(\d+)$/.test(e.value))
                            return n(this, e);
                    } else if (typeof e.value != 'number' || parseInt(e.value, 10) != e.value)
                        return n(this, e);
                }
            },
            {
                typeName: 'FunctionRef',
                process: function (e) {
                    if (typeof e.value != 'function')
                        return n(this, e);
                }
            },
            {
                typeName: 'Date',
                process: function (e) {
                    if (isNaN(Date.parse(e.value)))
                        return n(this, e);
                }
            },
            {
                typeName: 'RegExp',
                process: function (e) {
                    var t = e.value;
                    if (typeof t != 'object' && typeof t != 'function' || t == null || t.constructor != RegExp)
                        return n(this, e);
                }
            },
            {
                typeName: 'ObjectRef',
                process: function (r) {
                    if (typeof r.value != 'object' || r.value == null)
                        return n(this, r);
                    var i = r.beanDef.$classpath;
                    if (i && !t.isInstanceOf(r.value, i)) {
                        e._logError(e.NOT_OF_SPECIFIED_CLASSPATH, [
                            i,
                            r.beanDef[e._MD_TYPENAME],
                            r.value,
                            r.path
                        ]);
                        return;
                    }
                }
            },
            {
                typeName: 'Integer',
                preprocess: u,
                process: function (e) {
                    if (parseInt(e.value, 10) !== e.value)
                        return n(this, e);
                    a.call(this, e);
                }
            },
            {
                typeName: 'Float',
                preprocess: u,
                process: a
            },
            {
                typeName: 'Enum',
                preprocess: function (t) {
                    var n = t.$enumValues, r = t[e._MD_PARENTDEF], i = null;
                    if (!r[e._MD_BUILTIN]) {
                        i = r[e._MD_ENUMVALUESMAP];
                        if (n == null) {
                            t[e._MD_ENUMVALUESMAP] = i;
                            return;
                        }
                    } else if (n == null || n.length === 0)
                        n = [], e._logError(e.MISSING_ENUMVALUES, [t[e._MD_TYPENAME]]);
                    var s = {};
                    for (var o = 0; o < n.length; o++) {
                        var u = n[o];
                        s[u] == 1 ? e._logError(e.ENUM_DUPLICATED_VALUE, [
                            u,
                            t[e._MD_TYPENAME]
                        ]) : i && i[u] != 1 ? e._logError(e.ENUM_INVALID_INHERITANCE, [
                            u,
                            t[e._MD_TYPENAME],
                            r[e._MD_TYPENAME]
                        ]) : s[u] = 1;
                    }
                    t[e._MD_ENUMVALUESMAP] = s;
                },
                process: function (t) {
                    if (typeof t.value != 'string')
                        return n(this, t);
                    var r = t.beanDef[e._MD_ENUMVALUESMAP];
                    r[t.value] != 1 && e._logError(e.ENUM_UNKNOWN_VALUE, [
                        t.value,
                        t.path,
                        t.beanDef[e._MD_TYPENAME]
                    ]);
                }
            },
            {
                typeName: 'Object',
                dontSkip: !0,
                preprocess: function (t, n, i) {
                    var s = t.$properties;
                    s || (s = {}, t.$properties = s);
                    var o = t[e._MD_PARENTDEF];
                    t.$restricted = t.$restricted === !1 ? !1 : o.$restricted !== !1;
                    var u = o.$properties;
                    for (var a in u) {
                        if (!u.hasOwnProperty(a) || a.indexOf(':') != -1 || a.charAt(0) == '_')
                            continue;
                        var f = u[a], l = s[a];
                        l ? (e._preprocessBean(l, n + '.$properties.' + a, i), f && r(f, l)) : s[a] = f;
                    }
                    for (var c in s) {
                        if (!s.hasOwnProperty(c) || c.indexOf(':') != -1 || c.charAt(0) == '_')
                            continue;
                        Aria.checkJsVarName(c) || e._logError(e.INVALID_NAME, [
                            c,
                            e._currentBeanName
                        ]), e._preprocessBean(s[c], n + '.$properties.' + c, i);
                    }
                },
                process: function (t) {
                    var r = t.value, i = t.beanDef;
                    if (typeof r != 'object' || r == null)
                        return n(this, t);
                    var s = i.$properties, o = {};
                    if (e._options.checkEnabled && i.$restricted)
                        for (var u in r) {
                            if (!r.hasOwnProperty(u) || u.indexOf(':') != -1 || u.charAt(0) == '_')
                                continue;
                            o[u] = 1;
                        }
                    for (var u in s) {
                        if (!s.hasOwnProperty(u) || u.indexOf(':') != -1 || u.charAt(0) == '_')
                            continue;
                        var a = s[u];
                        delete o[u], e._checkType({
                            dataHolder: r,
                            dataName: u,
                            value: r[u],
                            beanDef: a,
                            path: t.path + '["' + u + '"]'
                        });
                    }
                    if (e._options.checkEnabled && i.$restricted)
                        for (var u in o)
                            r.hasOwnProperty(u) && o[u] == 1 && e._logError(e.UNDEFINED_PROPERTY, [
                                u,
                                t.path,
                                i[e._MD_TYPENAME]
                            ]);
                },
                makeFastNorm: function (e) {
                    var t = ['var beanProperties = this.$properties;'];
                    t.push('if (!obj) { return this.$getDefault(); }');
                    var n = e.$properties, r = !1;
                    for (var i in n) {
                        if (!n.hasOwnProperty(i) || i.indexOf(':') != -1 || i.charAt(0) == '_')
                            continue;
                        var s = n[i];
                        '$strDefault' in s ? (r = !0, t.push('if (obj[\'' + i + '\'] == null) { obj[\'' + i + '\']  = ' + s.$strDefault + '}'), s.$fastNorm && t.push('else { beanProperties[\'' + i + '\'].$fastNorm(obj[\'' + i + '\']); }')) : s.$fastNorm && (r = !0, t.push('if (obj[\'' + i + '\'] != null) { beanProperties[\'' + i + '\'].$fastNorm(obj[\'' + i + '\']);}'));
                    }
                    t.push('return obj;'), r ? e.$fastNorm = new Function('obj', t.join('\n')) : e.$fastNorm = l.emptyObject;
                }
            },
            {
                typeName: 'Array',
                dontSkip: !0,
                preprocess: i,
                process: function (t) {
                    var r = t.value;
                    if (typeof r != 'object' || r == null || r.constructor != Array)
                        return n(this, t);
                    var i = t.beanDef.$contentType;
                    for (var s = 0; s < r.length; s++)
                        e._checkType({
                            dataHolder: r,
                            dataName: s,
                            value: r[s],
                            beanDef: i,
                            path: t.path + '["' + s + '"]'
                        });
                },
                makeFastNorm: function (e) {
                    if (!e.$contentType.$fastNorm)
                        return;
                    e.$fastNorm = l.array;
                }
            },
            {
                typeName: 'Map',
                dontSkip: !0,
                preprocess: function (e, t, n) {
                    i(e, t, n), s(e, t, n);
                },
                process: function (t) {
                    var r = t.value;
                    if (typeof r != 'object' || r == null)
                        return n(this, t);
                    var i = t.beanDef.$contentType, s = t.beanDef.$keyType;
                    for (var o in r) {
                        if (!r.hasOwnProperty(o))
                            continue;
                        s && e._checkType({
                            dataHolder: r,
                            dataName: null,
                            value: o,
                            beanDef: s,
                            path: t.path
                        }), e._checkType({
                            dataHolder: r,
                            dataName: o,
                            value: r[o],
                            beanDef: i,
                            path: t.path + '["' + o + '"]'
                        });
                    }
                },
                makeFastNorm: function (e) {
                    if (!e.$contentType.$fastNorm)
                        return;
                    e.$fastNorm = l.map;
                }
            },
            {
                typeName: 'MultiTypes',
                preprocess: function (t, n, r) {
                    var i = t.$contentTypes, s = t[e._MD_PARENTDEF];
                    if (!s[e._MD_BUILTIN] && i == null) {
                        t.$contentTypes = s.$contentTypes;
                        return;
                    }
                    if (i == null)
                        return;
                    for (var o = 0; o < i.length; o++)
                        e._preprocessBean(i[o], n + '.$contentTypes[' + o + ']', r);
                },
                process: function (t) {
                    if (!e._options.checkMultiTypes)
                        return;
                    var n = t.beanDef.$contentTypes;
                    if (n == null)
                        return;
                    var r = e._errors, i = [];
                    for (var s = 0; s < n.length; s++) {
                        var o = n[s];
                        e._errors = [], e._checkType({
                            dataHolder: t.dataHolder,
                            dataName: t.dataName,
                            value: t.value,
                            beanDef: o,
                            path: t.path
                        });
                        if (e._errors.length === 0) {
                            e._errors = r;
                            return;
                        }
                        i.push({
                            beanDef: o,
                            errors: e._errors
                        });
                    }
                    e._errors = r, e._logError(e.INVALID_MULTITYPES_VALUE, [
                        t.path,
                        t.beanDef[e._MD_TYPENAME],
                        i
                    ]);
                }
            }
        ], l = {
            emptyObject: function (e) {
                var t = this.$properties;
                return e ? e : this.$getDefault();
            },
            array: function (e) {
                if (!e)
                    return this.$getDefault();
                for (var t = 0, n = e.length; t < n; t++)
                    this.$contentType.$fastNorm(e[t]);
                return e;
            },
            map: function (e) {
                if (!e)
                    return this.$getDefault();
                for (var t in e)
                    e.hasOwnProperty(t) && this.$contentType.$fastNorm(e[t]);
                return e;
            }
        };
    Aria.classDefinition({
        $classpath: 'aria.core.JsonTypesCheck',
        $singleton: !0,
        $constructor: function () {
            e = aria.core.JsonValidator, t = aria.utils.Type;
            for (var n = 0, r = f.length; n < r; n++)
                e._addBaseType(f[n]);
        },
        $destructor: function () {
            e = null, t = null;
        },
        $prototype: {}
    });
}})();