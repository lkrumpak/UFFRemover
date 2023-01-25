(function(){{
    typeof Aria == 'undefined' && (Aria = {}), Aria.version = '1.3.5', Aria._start = new Date().getTime(), Aria.$global = function () {
        return this;
    }(), !Aria.$frameworkWindow && Aria.$global.window && (Aria.$frameworkWindow = Aria.$global), Aria.$window = Aria.$window || Aria.$frameworkWindow;
    var e = {
        _abstract: 1,
        _boolean: 1,
        _break: 1,
        _byte: 1,
        _case: 1,
        _catch: 1,
        _char: 1,
        _class: 1,
        _const: 1,
        _continue: 1,
        _debugger: 1,
        _default: 1,
        _delete: 1,
        _do: 1,
        _double: 1,
        _else: 1,
        _enum: 1,
        _export: 1,
        _extends: 1,
        _false: 1,
        _final: 1,
        _finally: 1,
        _float: 1,
        _for: 1,
        _function: 1,
        _goto: 1,
        _if: 1,
        _implements: 1,
        _import: 1,
        _in: 1,
        _instanceof: 1,
        _int: 1,
        _interface: 1,
        _long: 1,
        _native: 1,
        _new: 1,
        _null: 1,
        _package: 1,
        _private: 1,
        _protected: 1,
        _public: 1,
        _return: 1,
        _short: 1,
        _static: 1,
        _super: 1,
        _switch: 1,
        _synchronized: 1,
        _this: 1,
        _throw: 1,
        _throws: 1,
        _transient: 1,
        _true: 1,
        _try: 1,
        _typeof: 1,
        _var: 1,
        _void: 1,
        _volatile: 1,
        _while: 1,
        _with: 1,
        _constructor: 1,
        _prototype: 1
    };
    Aria.NULL_CLASSPATH = '$classpath argument (or both $class and $package arguments) is mandatory and must be a string.', Aria.INVALID_NAMESPACE = 'Invalid namespace: %1', Aria.INVALID_DEFCLASSPATH = 'Invalid definition classpath: %1', Aria.INVALID_CLASSNAME_FORMAT = '%2Invalid class name : \'%1\'. Class name must be a string and start with a capital case.', Aria.INVALID_CLASSNAME_RESERVED = '%2Invalid class name: \'%1\'. Class name must be a string cannot be a reserved word.', Aria.INVALID_PACKAGENAME_FORMAT = '%2Invalid package name : \'%1\'. Package name must be a string must start with a small case.', Aria.INVALID_PACKAGENAME_RESERVED = '%2Invalid package name: \'%1\'. Package name must be a string cannot be a reserved word.', Aria.INSTANCE_OF_UNKNOWN_CLASS = 'Cannot create instance of class \'%1\'', Aria.DUPLICATE_CLASSNAME = 'class names in a class hierarchy must be different: %1', Aria.WRONG_BASE_CLASS = 'super class for %1 is not properly defined: base classes (%2) must be defined through Aria.classDefinition()', Aria.BASE_CLASS_UNDEFINED = 'super class for %1 is undefined (%2)', Aria.INCOHERENT_CLASSPATH = '$class or $package is incoherent with $classpath', Aria.INVALID_INTERFACES = 'Invalid interface definition in Class %1', Aria.PARENT_NOTCALLED = 'Error: the %1 of %2 was not called in %3.', Aria.WRONGPARENT_CALLED = 'Error: the %1 of %2 was called instead of %3 in %4.', Aria.REDECLARED_EVENT = 'Redeclared event name: %1 in %2', Aria.INVALID_EXTENDSTYPE = 'Invalid $extendsType property for class %1.', Aria.TEXT_TEMPLATE_HANDLE_CONFLICT = 'Template error: can\'t load text template \'%1\' defined in \'%2\'. A macro, a library, a resource, a variable or another text template has already been declared with the same name.', Aria.RESOURCES_HANDLE_CONFLICT = 'Template error: can\'t load resources \'%1\' defined in \'%2\'. A macro, a library, a text template, a variable or another resource has already been declared with the same name.', Aria.CANNOT_EXTEND_SINGLETON = 'Class %1 cannot extend singleton class %2', Aria.FUNCTION_PROTOTYPE_RETURN_NULL = 'Prototype function of %1 cannot returns null', Aria.$classpath = 'Aria', Aria.$logDebug = function () {
    }, Aria.$logInfo = function () {
    }, Aria.$logWarn = function () {
    }, Aria.$logError = function () {
    };
    var t = function (e, t) {
            if (!e || typeof e != 'string')
                return Aria.$logError(Aria.NULL_CLASSPATH), !1;
            var i = e.split('.'), s = i.length, o;
            for (var u = 0; u < s - 1; u++)
                if (!r(i[u], t))
                    return !1;
            return n(i[s - 1], t) ? !0 : !1;
        }, n = function (e, t) {
            return t = t || '', !e || !e.match(/^[_A-Z]\w*$/) ? (Aria.$logError(Aria.INVALID_CLASSNAME_FORMAT, [
                e,
                t
            ]), !1) : Aria.isJsReservedWord(e) ? (Aria.$logError(Aria.INVALID_CLASSNAME_RESERVED, [
                e,
                t
            ]), !1) : !0;
        }, r = function (e, t) {
            return t = t || '', e ? Aria.isJsReservedWord(e) ? (Aria.$logError(Aria.INVALID_PACKAGENAME_RESERVED, [
                e,
                t
            ]), !1) : (e.match(/^[a-z]\w*$/) || Aria.$logInfo(Aria.INVALID_PACKAGENAME_FORMAT, [
                e,
                t
            ]), !0) : (Aria.$logError(Aria.INVALID_PACKAGENAME_FORMAT, [
                e,
                t
            ]), !1);
        }, i = null, s = 0, o = 0, u = {}, a = {}, f = [], l = function (e, t, n, r, i) {
            var s = !e['aria:nextCall'];
            return !s && e['aria:nextCall'] != t.$classpath && Aria.$logError(Aria.WRONGPARENT_CALLED, [
                r,
                t.$classpath,
                e['aria:nextCall'],
                e.$classpath
            ]), e['aria:nextCall'] = n ? n.classDefinition.$classpath : null, t[r] ? t[r].apply(e, i) : n && r == '$destructor' && n.prototype.$destructor.apply(e, i), e['aria:nextCall'] && e['aria:nextCall'] != 'aria.core.JsObject' && Aria.$logError(Aria.PARENT_NOTCALLED, [
                r,
                e['aria:nextCall'],
                t.$classpath
            ]), s && (e['aria:nextCall'] = undefined), s;
        }, c = function (e, t) {
            return Aria.memCheckMode ? function () {
                try {
                    this['aria:objnumber'] || (s++, this['aria:objnumber'] = s, u[s] = this), l(this, e, t, '$constructor', arguments);
                } catch (n) {
                    throw this['aria:objnumber'] && (o++, u[this['aria:objnumber']] = null, delete u[this['aria:objnumber']], this['aria:objnumber'] = null), n;
                }
            } : e.$constructor;
        }, h = function (e, t) {
            return Aria.memCheckMode ? function () {
                l(this, e, t, '$destructor', arguments), this['aria:objnumber'] && (o++, u[this['aria:objnumber']] = null, delete u[this['aria:objnumber']], this['aria:objnumber'] = null);
            } : e.$destructor;
        }, p = function (e) {
            aria.templates.Layout.setRootDim(e);
        }, d = function (e, t, n) {
            t && Aria.$logError(t, n), i && i.notifyClassLoadError(e);
        }, v = function (e, t, n) {
            var r = !1;
            for (var i in t)
                t.hasOwnProperty(i) && (r || (r = !0), e[i] != null ? Aria.$logError(Aria.REDECLARED_EVENT, [
                    i,
                    n
                ]) : e[i] = t[i]);
            return r;
        };
    Aria.__mergeEvents = v, Aria.minSizeMode = Aria.minSizeMode === !0, Aria.debug = Aria.debug === !0, Aria.enableProfiling = Aria.enableProfiling === !0, Aria.memCheckMode = Aria.memCheckMode === !0, Aria.FRAMEWORK_PREFIX = Aria.FRAMEWORK_PREFIX || 'aria:', Aria.FRAMEWORK_RESOURCES = Aria.FRAMEWORK_RESOURCES || 'aria/resources/', Aria.$classDefinitions = {}, Aria.$classes = [], Aria.__undisposedObjects = u, Aria.activateTestMode = function () {
        Aria.testMode = !0;
        var e = Aria.rootTemplates;
        if (e)
            for (var t = 0, n = e.length; t < n; t++) {
                var r = e[t];
                r.$refresh();
            }
    }, Aria.dispose = function (e) {
        if (e) {
            var t, n, r;
            if (typeof e == 'string') {
                t = e, n = Aria.getClassRef(t);
                if (!n)
                    return;
                r = n.classDefinition || n.interfaceDefinition;
                if (!r)
                    return;
            } else {
                n = e, r = n.classDefinition || n.interfaceDefinition;
                if (!r)
                    return;
                t = r.$classpath;
                if (!t)
                    return;
            }
            var i = t.split('.'), a = i[i.length - 1];
            i.splice(i.length - 1, 1), i = Aria.nspace(i.join('.'));
            if (n == i[a]) {
                r.$singleton && n.$dispose(), r.$onunload && r.$onunload.call(r.$noargConstructor.prototype, n), delete i[a], delete this.$classDefinitions[t];
                for (var f = 0, l; l = this.$classes[f]; f++)
                    if (l == n) {
                        this.$classes.splice(f, 1);
                        break;
                    }
            }
        } else {
            var c = Aria.$classes.slice(0);
            for (var f = c.length - 1; f >= 0; f--) {
                var h = c[f];
                Aria.dispose(h);
            }
            c = null;
            var p = Aria.memCheckMode;
            Aria = null;
            if (p)
                return {
                    nbConstructions: s,
                    nbDestructions: o,
                    nbNotDisposed: s - o,
                    notDisposed: u
                };
        }
    }, Aria.nspace = function (e, t, n) {
        n == null && (n = Aria.$global), t = t !== !1;
        if (e === '')
            return n;
        if (!e || typeof e != 'string')
            return Aria.$logError(Aria.INVALID_NAMESPACE, [e]), null;
        var r = e.split('.'), i = r.length, s;
        for (var o = 0; o < i; o++) {
            s = r[o];
            if (!s || Aria.isJsReservedWord(s))
                return Aria.$logError(Aria.INVALID_NAMESPACE, [e]), null;
            if (!n[s]) {
                if (!t)
                    return null;
                n[s] = {};
            }
            n = n[s];
        }
        return n;
    };
    var m = {};
    Aria.getClassRef = function (e) {
        return m[e] || (m[e] = Aria.nspace(e, !1));
    }, Aria.cleanGetClassRefCache = function (e) {
        e ? delete m[e] : m = {};
    }, Aria.getClassInstance = function (e, t) {
        var n = Aria.getClassRef(e);
        if (n)
            return new n(t);
        Aria.$logError(Aria.INSTANCE_OF_UNKNOWN_CLASS, [e]);
    }, Aria.isJsReservedWord = function (t) {
        return e['_' + t] ? !0 : !1;
    }, Aria.checkJsVarName = function (e) {
        return e.match(/^[a-zA-Z_\$][\w\$]*$/) ? Aria.isJsReservedWord(e) ? !1 : !0 : !1;
    }, Aria.tplScriptDefinition = function (e) {
        Aria.classDefinition({
            $classpath: e.$classpath,
            $dependencies: e.$dependencies,
            $resources: e.$resources,
            $statics: e.$statics,
            $texts: e.$texts,
            $prototype: e.$prototype,
            $onload: function (t) {
                t.tplScriptDefinition = e;
            },
            $extends: 'aria.templates.Template',
            $constructor: function () {
                this.$Template.constructor.call(this), e.$constructor && e.$constructor.call(this);
            },
            $destructor: e.$destructor ? function () {
                e.$destructor.call(this), this.$Template.$destructor.call(this);
            } : null
        });
    }, Aria.classDefinition = function (e) {
        if (!e)
            return Aria.$logError(Aria.NULL_CLASSPATH);
        var n = e.$classpath, r = e.$class, s = e.$package, o = e.$extends;
        if (!n && (r == null || s == null))
            return Aria.$logError(Aria.NULL_CLASSPATH);
        var u, a, f;
        if (n) {
            f = n;
            var l = f.lastIndexOf('.');
            l > -1 ? (u = f.slice(0, l), a = f.slice(l + 1)) : (u = '', a = f);
            if (r && r != a || s && s != u)
                return Aria.$logError(Aria.INCOHERENT_CLASSPATH);
            e.$class = a, e.$package = u;
        } else
            a = r, u = e.$package, f = u + '.' + a, e.$classpath = f;
        if (!t(f, 'classDefinition: '))
            return;
        e.$events || (e.$events = {}), e.$noargConstructor = new Function(), (!o || o.match(/^\s*$/)) && f != 'aria.core.JsObject' && (o = e.$extends = 'aria.core.JsObject'), e.$constructor || (e.$constructor = new Function(e.$extends + '.prototype.constructor.apply(this, arguments);')), this.$classDefinitions[f] = e;
        var c = !0;
        if (i) {
            var h = {
                    TPL: e.$templates,
                    CSS: e.$css,
                    TML: e.$macrolibs,
                    CML: e.$csslibs
                }, p = [], d = e.$dependencies || [];
            e.$implements && e.$implements.length > 0 && (d = d.concat(e.$implements));
            if (aria.utils.Type.isObject(e.$resources))
                for (var v in e.$resources)
                    e.$resources.hasOwnProperty(v) && (e.$resources[v].hasOwnProperty('provider') ? d.push(e.$resources[v].provider) : p.push(e.$resources[v]));
            aria.utils.Type.isObject(e.$texts) && (h.TXT = aria.utils.Array.extractValuesFromMap(e.$texts)), h.RES = p, h.JS = d;
            if (o != 'aria.core.JsObject') {
                var m = e.$extendsType || 'JS';
                if (m !== 'JS' && m !== 'TPL' && m !== 'TML' && m !== 'CSS' && m !== 'CML' && m !== 'TXT')
                    return Aria.$logError(Aria.INVALID_EXTENDSTYPE, [a]);
                h[m] ? h[m].push(o) : h[m] = [o];
            }
            c = i.loadClassDependencies(f, h, {
                fn: Aria.loadClass,
                scope: Aria,
                args: f
            });
        }
        c && this.loadClass(f, f);
    }, Aria.interfaceDefinition = function (e) {
        var n = e.$classpath;
        if (!t(n, 'interfaceDefinition'))
            return;
        e.$events == null && (e.$events = {});
        var r = !0;
        i && (r = i.loadClassDependencies(n, { JS: e.$extends ? [e.$extends] : [] }, {
            fn: aria.core.Interfaces.loadInterface,
            scope: aria.core.Interfaces,
            args: e
        })), r && aria.core.Interfaces.loadInterface(e);
    }, Aria.copyObject = function (e, t) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n]);
    };
    var g = Aria.$global.navigator, y = g ? g.userAgent.toLowerCase().indexOf('msie') != -1 : !1;
    Aria.loadClass = function (e, n) {
        n || (n = e);
        if (!t(n, 'loadClass'))
            return;
        var r = this.$classDefinitions[e];
        if (!r)
            return Aria.$logError(Aria.INVALID_DEFCLASSPATH, [e]);
        var s = r.$prototype, o = r.$statics, u = r.$events, l = r.$beans, p = r.$resources, m = r.$texts, g = r.$implements, b = '', w = n, E = n.lastIndexOf('.');
        E > -1 && (b = n.slice(0, E), w = n.slice(E + 1));
        var S = Aria.nspace(b), x = null;
        if (r.$extends) {
            if (!t(r.$extends, 'parentClass'))
                return d(r.$classpath);
            x = Aria.getClassRef(r.$extends);
            if (!x)
                return d(r.$classpath, Aria.BASE_CLASS_UNDEFINED, [
                    r.$classpath,
                    r.$extends
                ]);
            if (!x.classDefinition)
                return d(r.$classpath, Aria.WRONG_BASE_CLASS, [
                    r.$classpath,
                    r.$extends
                ]);
            if (x.classDefinition.$singleton)
                return d(r.$classpath, Aria.CANNOT_EXTEND_SINGLETON, [
                    r.$classpath,
                    r.$extends
                ]);
        }
        var T;
        x ? T = new x.classDefinition.$noargConstructor() : T = {}, T.$classpath = r.$classpath, T.$class = r.$class, T.$package = r.$package;
        var N = {};
        T.$resources ? (N = T.$resources, T.$resources = {}, Aria.copyObject(N, T.$resources), Aria.copyObject(p, T.$resources)) : T.$resources = r.$resources;
        var C = {};
        T.$texts ? (C = T.$texts, T.$texts = {}, Aria.copyObject(C, T.$texts), Aria.copyObject(m, T.$texts)) : T.$texts = r.$texts, r.$css && (T.$css = r.$css);
        if (s) {
            typeof s == 'function' && (s = s.apply({}), s || (Aria.$logError(Aria.FUNCTION_PROTOTYPE_RETURN_NULL, [n]), s = {}), Aria.copyObject(s, r.$prototype));
            for (var k in s)
                s.hasOwnProperty(k) && k != '$init' && (typeof s[k] == 'function' && (s[k].displayName = '#' + k), T[k] = s[k]);
            y && (s.hasOwnProperty('toString') && (T.toString = s.toString), s.hasOwnProperty('valueOf') && (T.valueOf = s.valueOf));
        }
        var L = {};
        if (p)
            for (var k in p)
                p.hasOwnProperty(k) && (T[k] && !N[k] ? Aria.$logError(Aria.RESOURCES_HANDLE_CONFLICT, [
                    k,
                    n
                ]) : p[k].provider != null ? (L[k] = p[k], T[k] = Aria.getClassInstance(p[k].provider), T[k].getData = function (e) {
                    return function () {
                        return e.__getData(w);
                    };
                }(T[k]), T[k].__refName = k) : T[k] = Aria.getClassRef(p[k]));
        if (m)
            for (var k in m)
                m.hasOwnProperty(k) && (T[k] && !C[k] ? Aria.$logError(Aria.TEXT_TEMPLATE_HANDLE_CONFLICT, [
                    k,
                    n
                ]) : T[k] = Aria.getClassRef(m[k]));
        o && Aria.copyObject(o, T), l, T.$events = {}, x && v(T.$events, x.prototype.$events, T.$classpath);
        if (g)
            if (aria.utils.Type.isArray(g)) {
                for (var k = 0, A = g.length; k < A; k++)
                    if (!aria.core.Interfaces.applyInterface(g[k], T))
                        return i.notifyClassLoadError(T.$classpath);
            } else
                d(r.$classpath, Aria.INVALID_INTERFACES, [r.$classpath]);
        T.$interfaces || (T.$interfaces = {}), v(T.$events, u, T.$classpath);
        var O = h(r, x);
        O && (T.$destructor = O);
        var M = '$' + r.$class;
        if (T[M] != null)
            return d(r.$classpath, Aria.DUPLICATE_CLASSNAME, r.$class);
        T[M] = T;
        var _ = c(r, x);
        _.prototype = T, x && (_.superclass = x.prototype), T.constructor = _, r.$noargConstructor.prototype = T, r.$singleton ? S[w] = new _() : (o && Aria.copyObject(o, _), S[w] = _), S[w].classDefinition = r, Aria.$classes.push(S[w]);
        for (var k in L)
            if (L.hasOwnProperty(k)) {
                var D = L[k];
                D.hasOwnProperty('handler') && T[k].setHandler(D.handler), D.hasOwnProperty('resources') && T[k].setResources(D.resources), D.hasOwnProperty('onLoad') ? T[k].fetchData({
                    fn: D.onLoad,
                    scope: T
                }, w) : f.push({
                    ref: k,
                    prot: T[k]
                });
            }
        a[w] = {
            def: r,
            p: T,
            ns: S
        }, this.loadSyncProviders(w);
    }, Aria.loadSyncProviders = function (e) {
        if (f.length > 0) {
            var t = f.pop();
            t.prot.fetchData({
                fn: this.loadSyncProviders,
                scope: this,
                args: { calledback: !0 }
            }, e);
        } else {
            var n = e, r = a[n].def, s = a[n].p, o = a[n].ns, u = r.$prototype;
            u && u.$init && u.$init(s, r), r.$onload && r.$onload.call(s, o[n]), i ? i.notifyClassLoad(r.$classpath) : r.$classpath == 'aria.core.ClassMgr' && (i = aria.core.ClassMgr), a[n] = null;
        }
    }, Aria.load = function (e) {
        var t = new aria.core.MultiLoader(e);
        t.load();
    }, Aria.beanDefinitions = function (e) {
        aria.core.JsonValidator.beanDefinitions(e);
    }, Aria.setRootDim = function (e) {
        Aria.load({
            classes: ['aria.templates.Layout'],
            oncomplete: {
                fn: p,
                args: e
            }
        });
    }, Aria.loadTemplate = function (e, t) {
        aria.core.TplClassLoader.loadTemplate(e, t);
    }, Aria.disposeTemplate = function (e) {
        return aria.core.TplClassLoader.disposeTemplate(e);
    }, Aria.resourcesDefinition = function (e) {
        var t = Aria.getClassRef(e.$classpath);
        if (t) {
            var n = t.classDefinition.$prototype;
            aria.utils.Json.inject(e.$resources, n, !0);
            for (var r in n)
                n.hasOwnProperty(r) && (t[r] = n[r]);
            i && i.notifyClassLoad(e.$classpath);
        } else
            Aria.classDefinition({
                $classpath: e.$classpath,
                $singleton: !0,
                $constructor: function () {
                },
                $prototype: e.$resources
            });
    }, Aria.copyGlobals = function (e) {
        e.Aria = Aria;
        var t = Aria.$global, n = Aria.$classes, r = {};
        for (var i = 0, s = n.length; i < s; i++) {
            var o = n[i];
            if (o) {
                var u = o.$classpath;
                if (!u) {
                    var a = o.classDefinition || o.interfaceDefinition;
                    a && (u = a.$classpath);
                }
                if (u) {
                    var f = u.indexOf('.'), l = f > -1 ? u.substring(0, f) : u;
                    e[l] = t[l];
                }
            }
        }
    }, Aria.onDomReady = function (e) {
        aria.dom.DomReady.onReady(e);
    };
    if (Aria.$frameworkWindow) {
        if (Aria.rootFolderPath == null) {
            var b, w, E;
            w = Aria.$frameworkWindow.document.getElementsByTagName('script'), b = w[w.length - 1], w = null, E = b.src;
            var S = E.replace(/aria\/[^\/]*$/, '');
            S == E && (S = S.substring(0, S.lastIndexOf('/')) + '/');
            if (!S) {
                var x = Aria.$frameworkWindow.location;
                S = x.protocol + '//' + x.host + '/';
                var T = x.pathname;
                T = T.match(/[\/\w\.\-]+\//gi), T ? T = T[0] : T = '', S += T;
            }
            Aria.rootFolderPath = S;
        }
        if (Aria.rootFolderPath == '/') {
            var N = Aria.$frameworkWindow.location;
            Aria.rootFolderPath = N.protocol + '//' + N.host + '/';
        }
    }
    Aria.empty = function () {
    }, Aria.returnTrue = function () {
        return !0;
    }, Aria.returnFalse = function () {
        return !1;
    }, Aria.returnNull = function () {
        return null;
    }, Aria.__tempIE = y;
}})();