(function(){{
    var fastSerializer = function () {
            var e = Aria.$global.JSON || {};
            if (e.stringify)
                return e.stringify;
            String.prototype.toJSON = Number.prototype.toJSON = Aria.$global.Boolean.prototype.toJSON = function (e) {
                return this.valueOf();
            };
            var t = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, n = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, r, i, s = {
                    '\b': '\\b',
                    '\t': '\\t',
                    '\n': '\\n',
                    '\f': '\\f',
                    '\r': '\\r',
                    '"': '\\"',
                    '\\': '\\\\'
                }, o = function (e) {
                    return n.lastIndex = 0, n.test(e) ? '"' + e.replace(n, function (e) {
                        var t = s[e];
                        return typeof t == 'string' ? t : '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4);
                    }) + '"' : '"' + e + '"';
                }, u = function (e, t) {
                    var n, s, a, f, l = r, c, h = t[e];
                    h && typeof h.toJSON == 'function' && (h = h.toJSON(e));
                    switch (typeof h) {
                    case 'string':
                        return o(h);
                    case 'number':
                        return isFinite(h) ? String(h) : 'null';
                    case 'boolean':
                    case 'null':
                        return String(h);
                    case 'object':
                        if (!h)
                            return 'null';
                        r += i, c = [];
                        if (Object.prototype.toString.apply(h) === '[object Array]') {
                            f = h.length;
                            if (i) {
                                for (n = 0; n < f; n += 1)
                                    c[n] = u(n, h) || 'null';
                                a = c.length === 0 ? '[]' : r ? '[\n' + r + c.join(',\n' + r) + '\n' + l + ']' : '[' + c.join(',') + ']', r = l;
                            } else {
                                c.push('[');
                                for (n = 0; n < f; n += 1)
                                    n !== 0 && c.push(','), c.push(u(n, h) || 'null');
                                c.push(']'), a = c.join('');
                            }
                            return a;
                        }
                        if (i) {
                            for (s in h)
                                Object.prototype.hasOwnProperty.call(h, s) && (a = u(s, h), a && c.push(o(s) + (r ? ': ' : ':') + a));
                            a = c.length === 0 ? '{}' : r ? '{\n' + r + c.join(',\n' + r) + '\n' + l + '}' : '{' + c.join(',') + '}', r = l;
                        } else {
                            var p = !1;
                            c.push('{');
                            for (s in h)
                                Object.prototype.hasOwnProperty.call(h, s) && (a = u(s, h), a && (p && (c[c.length] = ','), c.push(o(s), ':', a), p = !0));
                            c.push('}'), a = c.join('');
                        }
                        return a;
                    }
                };
            return function (e, t, n) {
                var s;
                r = '', i = '';
                if (typeof n == 'number')
                    for (s = 0; s < n; s += 1)
                        i += ' ';
                else
                    typeof n == 'string' && (i = n);
                return u('', { '': e });
            };
        }(), typeUtil = aria.utils.Type, defaults = {
            indent: '',
            maxDepth: 100,
            escapeKeyNames: !0,
            encodeParameters: !1,
            reversible: !1,
            serializedDatePattern: 'yyyy/MM/dd HH:mm:ss',
            keepMetadata: !0
        };
    return {
        serialize: function (e, t) {
            t = t ? t : {}, this._normalizeOptions(t);
            if (this._optimized && t.indent.length <= 10 && t.escapeKeyNames && !t.encodeParameters && t.keepMetadata && t.maxDepth >= 100 && !t.reversible) {
                var n = Date.prototype.toJSON, r = RegExp.prototype.toJSON, i = Function.prototype.toJSON, s = this;
                try {
                    return Date.prototype.toJSON = function () {
                        return aria.utils.Date.format(this, t.serializedDatePattern);
                    }, RegExp.prototype.toJSON = function () {
                        return this + '';
                    }, Function.prototype.toJSON = function () {
                        return '[function]';
                    }, fastSerializer(e, null, t.indent);
                } catch (o) {
                    return null;
                } finally {
                    Date.prototype.toJSON = n, RegExp.prototype.toJSON = r, Function.prototype.toJSON = i;
                }
            }
            return this._serialize(e, t);
        },
        _normalizeOptions: function (e) {
            for (var t in defaults)
                defaults.hasOwnProperty(t) && !(t in e) && (e[t] = defaults[t]);
        },
        _serialize: function (e, t) {
            return e === null ? this._serializeNull(t) : typeUtil.isBoolean(e) ? this._serializeBoolean(e, t) : typeUtil.isNumber(e) ? this._serializeNumber(e, t) : typeUtil.isString(e) ? this._serializeString(e, t) : typeUtil.isDate(e) ? this._serializeDate(e, t) : typeUtil.isRegExp(e) ? this._serializeRegExp(e, t) : typeUtil.isArray(e) ? this._serializeArray(e, t) : typeUtil.isObject(e) ? this._serializeObject(e, t) : typeUtil.isFunction(e) ? this._serializeFunction(e, t) : '"[' + typeof e + ']"';
        },
        _serializeObject: function (e, t) {
            var n = t.indent, r, i = t.baseIndent ? t.baseIndent : '', s = n ? i + n : null;
            if (t.maxDepth < 1)
                return t.reversible ? null : '{...}';
            var o = ['{'];
            n && o.push('\n');
            var u = !0;
            for (var a in e)
                if (e.hasOwnProperty(a) && this.__preserveObjectKey(a, t)) {
                    u = !1, n && o.push(s), t.escapeKeyNames || a.match(/\:/) ? o.push('"' + a + '":') : o.push(a + ':'), n && o.push(' ');
                    var f = aria.utils.Json.copy(t, !0);
                    f.baseIndent = s, f.maxDepth = t.maxDepth - 1, r = this._serialize(e[a], f);
                    if (r === null)
                        return null;
                    o.push(r), n ? o.push(',\n') : o.push(',');
                }
            return u || (o[o.length - 1] = ''), n ? o.push('\n' + i + '}') : o.push('}'), o.join('');
        },
        __preserveObjectKey: function (e, t) {
            return t.keepMetadata ? !0 : !aria.utils.Json.isMetadata(e);
        },
        _serializeArray: function (e, t) {
            var n = t.indent, r, i = t.baseIndent ? t.baseIndent : '', s = n ? i + n : null;
            if (t.maxDepth < 1)
                return t.reversible ? null : '[...]';
            var o = e.length;
            if (o === 0)
                return '[]';
            var u = ['['];
            n && u.push('\n');
            for (var a = 0; o > a; a++) {
                n && u.push(s);
                var f = aria.utils.Json.copy(t, !0);
                f.baseIndent = s, f.maxDepth = t.maxDepth - 1, r = this._serialize(e[a], f);
                if (r === null)
                    return null;
                u.push(r), a != o - 1 && (u.push(','), n && u.push('\n'));
            }
            return n ? u.push('\n' + i + ']') : u.push(']'), u.join('');
        },
        _serializeString: function (e, t) {
            var n;
            return e = e.replace(/([\\\"])/g, '\\$1').replace(/(\r)?\n/g, '\\n'), t.encodeParameters === !0 ? n = encodeURIComponent(e) : n = e, '"' + n + '"';
        },
        _serializeNumber: function (e, t) {
            return e + '';
        },
        _serializeBoolean: function (e, t) {
            return e ? 'true' : 'false';
        },
        _serializeDate: function (e, t) {
            return t.reversible || !aria.utils.Date ? 'new Date(' + e.getTime() + ')' : '"' + aria.utils.Date.format(e, t.serializedDatePattern) + '"';
        },
        _serializeRegExp: function (e, t) {
            return t.reversible ? e + '' : this._serializeString(e + '', t);
        },
        _serializeFunction: function (e, t) {
            return '"[function]"';
        },
        _serializeNull: function () {
            return 'null';
        },
        parse: function (string) {
            var text = String(string);
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, '')))
                return eval('(' + text + ')');
            throw new Error('aria.utils.json.JsonSerializer.parse');
        }
    };
}})();