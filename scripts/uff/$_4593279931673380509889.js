(function(){{
    var e = aria.utils.Type, t = Aria.__mergeEvents, n = aria.core.ClassMgr, r = -1, i = function () {
            return r++, r;
        }, s = function (e) {
            var t = 10000000 * Math.random(), n = '' + (t | t);
            while (e[n])
                n += 'x';
            return n;
        }, o = {
            Function: 1,
            Object: 1,
            Interface: 1
        }, u = { $type: 'Function' }, a = { $type: 'Object' }, f = { $type: 'Object' }, l = function (t, n, r) {
            var i;
            if (e.isFunction(t))
                return u;
            if (e.isString(t))
                i = { $type: t };
            else {
                if (e.isArray(t))
                    return f;
                if (!e.isObject(t))
                    return null;
                t.$type == null ? (this.$logWarn('Member \'%2\' in interface \'%1\' uses a deprecated way of declaring an object in an interface. Please use {$type:\'Object\'} instead of {}.', [
                    n,
                    r
                ]), i = a) : i = t;
            }
            var s = i.$type;
            return o[s] ? aria.core.JsonValidator.normalize({
                json: i,
                beanName: 'aria.core.CfgBeans.ItfMember' + s + 'Cfg'
            }) ? i : null : null;
        }, c = function (e) {
            var t = {};
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n]);
            return t;
        }, h = {
            $interface: function () {
            },
            $destructor: function () {
            },
            $addListeners: function () {
            },
            $removeListeners: function () {
            },
            $unregisterListeners: function () {
            },
            $on: function () {
            },
            toString: function () {
                return '[' + this.$classpath + ']';
            }
        }, p = function () {
        };
    p.prototype = h;
    var d = { protoProperty: !0 }, v = {};
    v.__proto__ = d;
    var m = v.protoProperty ? function (e, t) {
        e.__proto__ = t;
        for (var n in e)
            e.hasOwnProperty(n) && delete e[n];
    } : function (e, t) {
        var n = e.__$linkItfWrappers;
        if (n && e.hasOwnProperty('__$linkItfWrappers'))
            for (var r = 0, i = n.length; r < i; r++)
                m.call(this, n[r], t);
        for (var r in e)
            e.hasOwnProperty(r) && delete e[r], r in e && (e[r] = t[r]);
        for (var r in t)
            e[r] = t[r];
        delete e.__$linkItfWrappers, t.hasOwnProperty('__$linkItfWrappers') ? t.__$linkItfWrappers.push(e) : t.__$linkItfWrappers = [e];
    };
    d = null, v = null, Aria.classDefinition({
        $classpath: 'aria.core.Interfaces',
        $singleton: !0,
        $statics: {
            INVALID_INTERFACE_MEMBER: 'The \'%1\' interface has a \'%2\' member, which does not respect the constraints on interface member names. This member will be ignored.',
            INVALID_INTERFACE_MEMBER_DEF: 'Invalid definition for the \'%2\' member on the \'%1\' interface. This member will be ignored.',
            BASE_INTERFACE_UNDEFINED: 'Super interface for %1 is undefined (%2)',
            WRONG_BASE_INTERFACE: 'Super interface for %1 is not properly defined: base interfaces (%2) must be defined through Aria.interfaceDefinition.',
            METHOD_NOT_IMPLEMENTED: 'Class \'%1\' has no implementation of method \'%2\', required by interface \'%3\'.',
            WRONG_INTERFACE: 'Interface \'%1\' declared in the $implements section of class \'%2\' was not properly defined through Aria.interfaceDefinition.'
        },
        $prototype: {
            generateKey: s,
            linkItfWrappers: m,
            loadInterface: function (e) {
                var r = e.$classpath, o, u = null;
                if (e.$extends) {
                    u = Aria.getClassRef(e.$extends);
                    if (!u) {
                        this.$logError(this.BASE_INTERFACE_UNDEFINED, [
                            r,
                            e.$extends
                        ]), n.notifyClassLoadError(r);
                        return;
                    }
                    var a = u ? u.interfaceDefinition : null;
                    a = a ? a.$noargConstructor : null;
                    if (!a) {
                        this.$logError(this.WRONG_BASE_INTERFACE, [
                            r,
                            e.$extends
                        ]), n.notifyClassLoadError(r);
                        return;
                    }
                    o = new a(), o.$interfaces = c(u.prototype.$interfaces);
                } else
                    o = new p(), o.$interfaces = {};
                o.$classpath = r;
                var f = '__iid' + i(), d = e.$interface, v = [], m = [], g = [];
                for (var y in d)
                    if (d.hasOwnProperty(y)) {
                        if (!Aria.checkJsVarName(y) || h[y]) {
                            this.$logError(this.INVALID_INTERFACE_MEMBER, [
                                r,
                                y
                            ]), d[y] = null, delete d[y];
                            continue;
                        }
                        var b = l.call(this, d[y], r, y);
                        d[y] = b;
                        if (b != null)
                            if (b.$type == 'Function') {
                                var w = b.$callbackParam;
                                w == null && (w = 'null'), v.push('p.', y, '=function(){\nreturn i[this.', f, '].$call(\'', r, '\',\'', y, '\',arguments,', w, ');\n}\n');
                            } else
                                b.$type == 'Interface' ? (m.push('this.', y, '=obj.', y, '?obj.', y, '.$interface(\'', b.$classpath, '\'):null;\n'), g.push('this.', y, '=null;\n')) : b.$type == 'Object' && (m.push('this.', y, '=obj.', y, ';\n'), g.push('this.', y, '=null;\n'));
                        else
                            this.$logError(this.INVALID_INTERFACE_MEMBER_DEF, [
                                r,
                                y
                            ]), delete d[y];
                    }
                o.$events = {};
                var E = !1;
                u ? E = t(o.$events, u.prototype.$events, r) : v.push('p.$interface=function(a){\nreturn aria.core.Interfaces.getInterface(i[this.', f, '],a,this);\n};\n'), t(o.$events, e.$events, r) && !E && (v.push('p.$addListeners=function(a){\nreturn i[this.', f, '].$addListeners(a,this);\n};\n'), v.push('p.$onOnce=function(a){\nreturn i[this.', f, '].$onOnce(a,this);\n};\n'), v.push('p.$removeListeners=function(a){\nreturn i[this.', f, '].$removeListeners(a,this);\n};\n'), v.push('p.$unregisterListeners=function(a){\nreturn i[this.', f, '].$unregisterListeners(a,this);\n};\n'), v.push('p.$on=p.$addListeners;\n')), v.push('p.$destructor=function(){\n', g.join(''), 'i[this.', f, ']=null;\ndelete i[this.', f, '];\nthis.', f, '=null;\n', u ? 'e.prototype.$destructor.call(this);\n' : '', '};\n');
                var S = [], x = {
                        g: s,
                        p: o,
                        c: null,
                        e: u
                    };
                Aria.nspace(r, !0), S.push('var i={};\nvar evalContext=arguments[2];\nvar g=evalContext.g;\nvar p=evalContext.p;\nvar e=evalContext.e;\nevalContext.c=function(obj){\n', u ? 'e.call(this,obj);\n' : '', 'var k=g(i);\ni[k]=obj;\nthis.', f, '=k;\n', m.join(''), '};\n', v.join(''), 'Aria.$global.', r, '=evalContext.c;\n', 'p=null;\nevalContext=null;\n'), S = S.join(''), Aria.eval(S, r.replace(/\./g, '/') + '-wrapper.js', x);
                var T = x.c;
                o.$interfaces[r] = T, T.prototype = o, T.interfaceDefinition = e, T.superInterface = u, e.$noargConstructor = new Function(), e.$noargConstructor.prototype = o, Aria.$classes.push(T), n.notifyClassLoad(r);
            },
            applyInterface: function (n, r) {
                var i = r.$interfaces;
                if (i && i[n])
                    return !0;
                var s = Aria.getClassRef(n);
                if (!s.interfaceDefinition)
                    return this.$logError(this.WRONG_INTERFACE, [
                        n,
                        r.$classpath
                    ]), !1;
                if (s.superInterface) {
                    if (!this.applyInterface(s.interfaceDefinition.$extends, r))
                        return !1;
                    i = r.$interfaces;
                }
                r.hasOwnProperty('$interfaces') || (i = c(i), r.$interfaces = i), i[n] = s, t(r.$events, s.interfaceDefinition.$events, r.$classpath);
                var o = s.interfaceDefinition.$interface;
                for (var u in o)
                    if (o.hasOwnProperty(u) && o[u].$type == 'Function' && !e.isFunction(r[u]))
                        return this.$logError(this.METHOD_NOT_IMPLEMENTED, [
                            r.$classpath,
                            u,
                            n
                        ]), !1;
                return !0;
            },
            getInterface: function (t, n, r) {
                var i, s;
                e.isFunction(n) ? (s = n, i = n.interfaceDefinition.$classpath) : e.isString(n) && (i = n);
                var o = t.__$interfaces, u;
                if (r != null && !r.$interfaces[i])
                    return this.$logError(this.INTERFACE_NOT_SUPPORTED, [
                        i,
                        r.$classpath
                    ]), null;
                if (o) {
                    u = o[i];
                    if (u)
                        return u;
                }
                if (!t.$interfaces[i])
                    return this.$logError(this.INTERFACE_NOT_SUPPORTED, [
                        i,
                        t.$classpath
                    ]), null;
                if (!s) {
                    s = Aria.getClassRef(i);
                    if (!s)
                        return null;
                }
                return o || (o = {}, t.__$interfaces = o), u = new s(t), o[i] = u, u;
            },
            disposeInterfaces: function (e) {
                var t = e.__$interfaces;
                if (!t)
                    return;
                for (var n in t)
                    t.hasOwnProperty(n) && t[n].$destructor && (t[n].$destructor(), t[n] = null);
                e.__$interfaces = null;
            }
        }
    });
}})();