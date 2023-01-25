(function(){{
    var e = function (e) {
            var t = e.cfg.tplDiv;
            t && aria.utils.Dom.replaceHTML(t, '#TEMPLATE ERROR#'), this.$callback(e.cb, { success: !1 });
        }, t = function (e, t) {
            var n = t.tplCtxt, r = t.cfg;
            n.viewReady(), this.$callback(t.cb, {
                success: !0,
                tplCtxt: r.provideContext ? n : null
            });
        }, n = function (n, r) {
            var i = r.cfg, s = r.cb, o = new aria.templates.TemplateCtxt();
            n.moduleCtrlPrivate && i.moduleCtrl.autoDispose && (i.toDispose ? i.toDispose.push(n.moduleCtrlPrivate) : i.toDispose = [n.moduleCtrlPrivate]), i.moduleCtrl = n.moduleCtrl, i.isRootTemplate = !0;
            var u = o.initTemplate(i);
            u && o.dataReady();
            var a = i.tplDiv;
            aria.core.Browser.isIE && (a.style.background = ''), a.className = o.getCSSClassNames(), u ? (r.tplCtxt = o, o.$onOnce({
                SectionRefreshed: {
                    fn: t,
                    scope: this,
                    args: r
                }
            }), o.$refresh()) : (o.$dispose(), e.call(this, r));
        }, r = function (e) {
            var t = e.cfg, r = t.moduleCtrl;
            r && !r.getData ? aria.templates.ModuleCtrlFactory.createModuleCtrl(r, {
                fn: n,
                args: e,
                scope: this
            }) : (r && !t.moduleCtrlPrivate && r.$publicInterface && (t.moduleCtrl = r.$publicInterface()), n.call(this, { moduleCtrl: t.moduleCtrl }, e));
        }, i = function (t) {
            var n = t.cfg, i = t.cb;
            if (!aria.core.JsonValidator.normalize({
                    json: n,
                    beanName: 'aria.templates.CfgBeans.LoadTemplateCfg'
                })) {
                this.$callback(i, { success: !1 });
                return;
            }
            var s = [
                    'aria.templates.TemplateCtxt',
                    'aria.templates.CSSMgr'
                ], o = n.moduleCtrl;
            if (o && !o.getData) {
                if (!aria.core.JsonValidator.normalize({
                        json: o,
                        beanName: 'aria.templates.CfgBeans.InitModuleCtrl'
                    })) {
                    this.$callback(i, { success: !1 });
                    return;
                }
                s.push('aria.templates.ModuleCtrlFactory', o.classpath);
            }
            var u = [
                'aria.templates.GlobalStyle',
                'aria.widgets.GlobalStyle'
            ];
            n.reload && (aria.templates.TemplateManager.unloadTemplate(n.classpath, n.reloadByPassCache), aria.templates.CSSMgr && (u = u.concat(aria.templates.CSSMgr.getInvalidClasspaths(!0))));
            var a = aria.templates.Layout;
            n.rootDim && a.setRootDim(n.rootDim);
            var f = n.div;
            f = aria.utils.Dom.replaceHTML(f, '');
            if (!f) {
                this.$callback(i, { success: !1 });
                return;
            }
            Aria.minSizeMode && (f.style.border = '2px solid red'), n.div = f, f.className = this.addPrintOptions(f.className, n.printOptions);
            if (n.width != null || n.height != null)
                a.setDivSize(f, n.width, n.height), (typeof n.width == 'object' || typeof n.height == 'object') && a.registerAutoresize(f, n.width, n.height);
            if (aria.core.Browser.isIE6 || aria.core.Browser.isIE7) {
                var l = f.style.position;
                l != 'absolute' && l != 'relative' && (f.style.position = 'relative');
            }
            var c = Aria.$window.document.createElement('div');
            c.className = 'xLDI', f.appendChild(c), n.tplDiv = c, Aria.load({
                classes: s,
                templates: [n.classpath],
                css: u,
                oncomplete: {
                    scope: this,
                    args: t,
                    fn: r
                },
                onerror: {
                    scope: this,
                    args: t,
                    fn: e
                }
            }), f = null, c = null;
        };
    Aria.classDefinition({
        $classpath: 'aria.core.TplClassLoader',
        $extends: 'aria.core.ClassLoader',
        $constructor: function () {
            this.$ClassLoader.constructor.apply(this, arguments), this._refLogicalPath += '.tpl', this._classGeneratorClassName = 'TplClassGenerator';
        },
        $onload: function () {
            var e = aria.core.TplClassLoader;
            e.$callback = aria.core.JsObject.prototype.$callback, e.$logError = aria.core.JsObject.prototype.$logError, e.$normCallback = aria.core.JsObject.prototype.$normCallback, e.$classpath = 'aria.core.TplClassLoader';
        },
        $statics: {
            TEMPLATE_EVAL_ERROR: 'Error while evaluating the class generated from template \'%1\'',
            TEMPLATE_DEBUG_EVAL_ERROR: 'Error while evaluating the class generated from template \'%1\'',
            MISSING_TPLSCRIPTDEFINITION: 'The template script associated to template %1 must be defined using Aria.tplScriptDefinition.',
            _importScriptPrototype: function (e, t) {
                var n = e.tplScriptDefinition;
                if (!n)
                    return this.$logError(this.MISSING_TPLSCRIPTDEFINITION, [t.$classpath]);
                var r = n.$classpath.split('.'), i = r[r.length - 1], s = '$' + i, o = {};
                if (t[s])
                    return this.$logError(Aria.DUPLICATE_CLASSNAME, [n.$classpath]);
                Aria.copyObject(n.$prototype, o), Aria.copyObject(n.$statics, o);
                var u = e.classDefinition.$resources;
                if (u) {
                    t.$resources || (t.$resources = {});
                    var a = e.prototype;
                    for (var f in u)
                        u.hasOwnProperty(f) && (t[f] && !t.$resources[f] ? this.$logError(Aria.RESOURCES_HANDLE_CONFLICT, [
                            f,
                            n.$classpath
                        ]) : (o[f] = a[f], t.$resources[f] = u[f]));
                }
                var l = e.classDefinition.$texts;
                if (l) {
                    t.$texts || (t.$texts = {});
                    for (var f in l)
                        l.hasOwnProperty(f) && (t[f] && !t.$texts[f] ? this.$logError(Aria.TEXT_TEMPLATE_HANDLE_CONFLICT, [
                            f,
                            n.$classpath
                        ]) : (o[f] = e.prototype[f], t.$texts[f] = l[f]));
                }
                Aria.copyObject(o, t), o.constructor = n.$constructor || Aria.empty, o.$destructor = n.$destructor || Aria.empty, t[s] = o;
            },
            addPrintOptions: function (e, t) {
                return e = e.replace(/(\s|^)\s*xPrint\w*/g, ''), t == 'adaptX' ? e += ' xPrintAdaptX' : t == 'adaptY' ? e += ' xPrintAdaptY' : t == 'adaptXY' ? e += ' xPrintAdaptX xPrintAdaptY' : t == 'hidden' && (e += ' xPrintHide'), e;
            },
            loadTemplate: function (e, t) {
                var n = Aria.getClassRef('aria.core.environment.Customizations');
                n && n.isCustomized() && !n.descriptorLoaded() ? n.$onOnce({
                    descriptorLoaded: {
                        fn: this._startLoad,
                        scope: this,
                        args: {
                            cfg: e,
                            cb: t
                        }
                    }
                }) : this._startLoad(null, {
                    cfg: e,
                    cb: t
                });
            },
            _startLoad: function (e, t) {
                var n = t.cfg, r = t.cb, s = Aria.getClassRef('aria.core.environment.Customizations'), o = n.origClasspath || n.classpath;
                n.classpath = s ? s.getTemplateCP(o) : o, n.origClasspath = o, Aria.load({
                    classes: [
                        'aria.templates.Layout',
                        'aria.templates.CfgBeans',
                        'aria.utils.Dom',
                        'aria.templates.TemplateManager'
                    ],
                    oncomplete: {
                        fn: i,
                        args: {
                            cfg: n,
                            cb: r
                        },
                        scope: this
                    }
                });
            },
            disposeTemplate: function (e) {
                var t;
                typeof e == 'string' && (e = aria.utils.Dom.getElementById(e));
                if (aria && aria.utils && aria.utils.Dom)
                    return aria.templates.TemplateCtxtManager.disposeFromDom(e);
            }
        },
        $prototype: {
            _loadClass: function (e, t) {
                this._loadClassAndGenerate(e, t);
            }
        }
    });
}})();