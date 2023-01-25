(function(){{
    var e = aria.utils.Json, t = aria.utils.Type;
    Aria.classDefinition({
        $classpath: 'aria.core.JsonValidator',
        $dependencies: [
            'aria.utils.Json',
            'aria.utils.Type'
        ],
        $singleton: !0,
        $constructor: function () {
            this.__waitingBeans = {}, this.__loadedBeans = {}, this.__processedBeans = {}, this.__baseTypes = {}, this._options = {
                addDefaults: !0,
                checkEnabled: Aria.debug,
                checkDefaults: !0,
                checkMultiTypes: !1,
                checkInheritance: !0,
                checkBeans: !0,
                throwsErrors: !1
            }, this._errors = [], this._currentBeanName = 'JSON root', this._typeBeingComputed = { typeName: 'typeBeingComputed' }, this._typeError = { typeName: 'typeError' }, this._typeRefError = {}, this._typeRefError[this._MD_BUILTIN] = !0, this._typeRefError[this._MD_BASETYPE] = this._typeError;
        },
        $destructor: function () {
            this.__waitingBeans = null, this.__loadedBeans = null;
        },
        $statics: {
            INVALID_TYPE_NAME: 'Invalid or missing $type in %1: %2',
            INVALID_TYPE_REF: 'Type %1, found in %2, is not defined in package %3',
            UNDEFINED_PREFIX: 'Prefix %1, found in %2, is not defined',
            MISSING_BEANSPACKAGE: 'Beans package %1, referenced in %2, was not found',
            RECURSIVE_BEAN: 'Recursive bean definition in %1',
            BOTH_MANDATORY_DEFAULT: '$mandatory=true and $default should not be specified at the same time in %1',
            INHERITANCE_EXPECTED: 'Type %1 should inherit from %2',
            MISSING_CONTENTTYPE: 'Missing $contentType in the %1 definition in %2',
            ENUM_DUPLICATED_VALUE: 'Duplicated value \'%1\' in enum definition %2',
            ENUM_INVALID_INHERITANCE: 'Value \'%1\', from %2, is not present in parent enum definition %3',
            INVALID_DEFAULTVALUE: 'Default value %1 in %2 is invalid: %3',
            BEANCHECK_FAILED: 'Checking bean definition %1 with beans schema failed: %2',
            MISSING_ENUMVALUES: '$enumValues must be defined and non-empty in the Enum definition in %1',
            INVALID_NAME: 'Invalid name for a bean: %1 in %2',
            NUMBER_INVALID_INHERITANCE: 'Invalid inheritance: %1 in %2 should respect its parent range',
            NUMBER_INVALID_RANGE: 'Invalid range in %1: %2-%3',
            BEAN_NOT_FOUND: 'Bean %1 was not found',
            INVALID_TYPE_VALUE: 'Invalid type: expected type %1 (from %2), found incorrect value \'%3\' in %4',
            INVALID_MULTITYPES_VALUE: 'The value found in %1 is not valid for all the types defined in %2: %3',
            ENUM_UNKNOWN_VALUE: 'Value \'%1\' in %2 is not in the enum definition %3',
            UNDEFINED_PROPERTY: 'Property \'%1\', used in %2, is not defined in %3',
            MISSING_MANDATORY: 'Missing mandatory attribute in %1 for definition %2',
            REGEXP_FAILED: 'Value \'%1\' in %2 does not comply with RegExp %3 in %4',
            NUMBER_RANGE: 'Number \'%1\' in %2 is not in the accepted range (%3=%4)',
            NOT_OF_SPECIFIED_CLASSPATH: 'Invalid class instance: expected instance of class %1 (from %2), found incorrect value \'%3\' in %4'
        },
        $prototype: {
            _MD_TYPENAME: Aria.FRAMEWORK_PREFIX + 'typeName',
            _MD_BASETYPE: Aria.FRAMEWORK_PREFIX + 'baseType',
            _MD_PARENTDEF: Aria.FRAMEWORK_PREFIX + 'parentType',
            _MD_BUILTIN: Aria.FRAMEWORK_PREFIX + 'builtIn',
            _MD_ENUMVALUESMAP: Aria.FRAMEWORK_PREFIX + 'enumValuesMap',
            _MD_STRDEFAULT: Aria.FRAMEWORK_PREFIX + 'strDefault',
            _BASE_TYPES_PACKAGE: 'aria.core.JsonTypes',
            _BEANS_SCHEMA_PACKAGE: 'aria.core.BaseTypes',
            _logError: function (e, t) {
                this._errors.push({
                    msgId: e,
                    msgArgs: t
                });
            },
            __logAllErrors: function (e, t) {
                if (e.length === 0)
                    return !0;
                if (!t) {
                    for (var n = 0; n < e.length; n++)
                        this.$logError(e[n].msgId, e[n].msgArgs);
                    return !1;
                }
                throw { errors: e };
            },
            __findTypeInBP: function (e, t) {
                var n = { $properties: e.$beans }, r = t.split('.');
                for (var i = 0; i < r.length; i++) {
                    var s = r[i];
                    s == '$contentType' && n.$contentType ? n = n.$contentType : typeof n.$properties == 'object' && n.$properties != null ? n = n.$properties[s] : n = null;
                    if (typeof n != 'object' || n == null)
                        return this._logError(this.INVALID_TYPE_REF, [
                            t,
                            this._currentBeanName,
                            e.$package
                        ]), this._typeRefError;
                }
                return n;
            },
            __getTypeRef: function (e, t) {
                var n, r, i = e.indexOf(':');
                if (i == -1)
                    n = t.$package, r = t;
                else {
                    var s = e.substr(0, i);
                    e = e.substr(i + 1), n = t.$namespaces == null ? null : t.$namespaces[s];
                    if (n == null)
                        return this._logError(this.UNDEFINED_PREFIX, [
                            s,
                            this._currentBeanName
                        ]), this._typeRefError;
                }
                var o = n + '.' + e, u = this.__processedBeans[o];
                if (u)
                    return u;
                if (!r) {
                    r = this.__loadedBeans[n];
                    if (r == null)
                        return this._logError(this.MISSING_BEANSPACKAGE, [
                            n,
                            this._currentBeanName
                        ]), this._typeRefError;
                }
                return u = this.__findTypeInBP(r, e), u != this._typeError && !u[this._MD_TYPENAME] && (u[this._MD_TYPENAME] = o), u;
            },
            _preprocessBean: function (n, r, i) {
                this._currentBeanName = r;
                var s = n[this._MD_BASETYPE];
                if (s != null)
                    return s;
                n[this._MD_TYPENAME] = r, n[this._MD_BASETYPE] = this._typeBeingComputed;
                var o = n.$type, u = this._typeRefError;
                if (typeof o != 'string' || !o)
                    return this._logError(this.INVALID_TYPE_NAME, [
                        n[this._MD_TYPENAME],
                        o
                    ]), this._typeError;
                u = this.__getTypeRef(o, i), n[this._MD_PARENTDEF] = u, o = u[this._MD_TYPENAME], s = this._preprocessBean(u, o, i);
                if (s == this._typeBeingComputed)
                    return i.$package == this._BASE_TYPES_PACKAGE ? this._getBuiltInBaseType(n) : (this._logError(this.RECURSIVE_BEAN, n[this._MD_TYPENAME]), this._typeError);
                n[this._MD_BASETYPE] = s, this.__checkBean(n) || (n[this._MD_BASETYPE] = this._typeError), !n.$description && !u[this._MD_BUILTIN] && (n.$description = u.$description);
                var a = !('$default' in n), f = !('$mandatory' in n);
                a && f && (n.$mandatory = !1, f = !1), f && (n.$mandatory = u.$mandatory), a && '$default' in u && !n.$mandatory && (n.$default = e.copy(u.$default)), s && s.preprocess && s.preprocess(n, r, i);
                if (n[this._MD_BASETYPE] == this._typeError)
                    return this._typeError;
                s && s.makeFastNorm && !n.$fastNorm && (n.$getDefault = Aria.returnNull, s.makeFastNorm(n));
                if ('$default' in n) {
                    if (n.$mandatory === !0)
                        return this._logError(this.BOTH_MANDATORY_DEFAULT, n[this._MD_TYPENAME]), this._typeError;
                    if (this._options.checkDefaults) {
                        var l = this._errors;
                        this._errors = [];
                        var c = this._processJsonValidation({
                            beanDef: n,
                            json: n.$default
                        });
                        this._errors = l;
                        if (c.length > 0)
                            return this._logError(this.INVALID_DEFAULTVALUE, [
                                n.$default,
                                n[this._MD_TYPENAME],
                                c
                            ]), this._typeError;
                    }
                    var h = n.$default;
                    '$simpleCopyType' in n || (n.$simpleCopyType = !h || t.isString(h) || t.isNumber(h) || h === !0), n.$strDefault || (n.$strDefault = e.convertToJsonString(h, { reversible: !0 }), n.$fastNorm && (n.$getDefault = new Function('return ' + n.$strDefault + ';')));
                }
                return this.__processedBeans[r] = n, s;
            },
            __preprocessBP: function (e) {
                this._errors = [];
                var t = e.$beans;
                for (var n in t) {
                    if (!t.hasOwnProperty(n) || n.indexOf(':') != -1)
                        continue;
                    Aria.checkJsVarName(n) || this._logError(this.INVALID_NAME, [
                        n,
                        this._currentBeanName
                    ]), this._preprocessBean(t[n], e.$package + '.' + n, e);
                }
                return this._errors;
            },
            _getBuiltInBaseType: function (e) {
                var t = this.__baseTypes[e.$type];
                this.$assert(298, t != null), e[this._MD_BUILTIN] = !0, e[this._MD_BASETYPE] = t, e[this._MD_TYPENAME] = [
                    this._BASE_TYPES_PACKAGE,
                    t.typeName
                ].join('.');
            },
            _addBaseType: function (e) {
                this.__baseTypes[e.typeName] = e, !e.dontSkip && !this._options.checkEnabled && (e.process = null, e.preprocess = null);
            },
            _checkType: function (t) {
                var n = t.beanDef, r = n[this._MD_BASETYPE];
                if (t.value == null) {
                    n.$mandatory ? this._logError(this.MISSING_MANDATORY, [
                        t.path,
                        n[this._MD_TYPENAME]
                    ]) : '$default' in n && this._options.addDefaults && (n.$simpleCopyType ? t.value = n.$default : t.value = e.copy(n.$default), t.dataHolder[t.dataName] = t.value);
                    return;
                }
                r.process && r.process(t);
            },
            _getBean: function (e) {
                return this.__processedBeans[e] || null;
            },
            _processJsonValidation: function (e) {
                var t = e.beanDef ? e.beanDef : this._getBean(e.beanName);
                if (t == null)
                    return this._errors = [], this._logError(this.BEAN_NOT_FOUND, e.beanName), this._errors;
                if (this._options.checkEnabled) {
                    this._errors = [], this._checkType({
                        dataHolder: e,
                        dataName: 'json',
                        path: 'ROOT',
                        value: e.json,
                        beanDef: t
                    });
                    var n = this._errors;
                    return n;
                }
                return t.$fastNorm && (e.json = t.$fastNorm(e.json)), [];
            },
            __checkBean: function (e) {
                if (this._options.checkBeans && !this._options.checkMultiTypes && this.__loadedBeans[this._BEANS_SCHEMA_PACKAGE]) {
                    var t = e[this._MD_BASETYPE];
                    if (t == this._typeError)
                        return !1;
                    var n = this._getBean(this._BEANS_SCHEMA_PACKAGE + '.' + t.typeName);
                    this.$assert(402, n != null);
                    var r = this._errors, i = this._processJsonValidation({
                            beanDef: n,
                            json: e
                        });
                    this._errors = r;
                    if (i.length > 0)
                        return this._logError(this.BEANCHECK_FAILED, [
                            this._currentBeanName,
                            i
                        ]), !1;
                }
                return !0;
            },
            __loadBeans: function (e) {
                var t = !0, n = this.__waitingBeans[e];
                delete this.__waitingBeans[e], this.$assert(58, n);
                if (this._options.checkBeans && this.__loadedBeans[this._BEANS_SCHEMA_PACKAGE]) {
                    var r = this._getBean(this._BEANS_SCHEMA_PACKAGE + '.Package');
                    this.$assert(428, r != null), t = t && this.__logAllErrors(this._processJsonValidation({
                        beanDef: r,
                        json: n
                    }));
                }
                this._options.addDefaults = !0, t = t && this.__logAllErrors(this.__preprocessBP(n)), t ? (this.__loadedBeans[e] = n, aria.core.ClassMgr.notifyClassLoad(e)) : aria.core.ClassMgr.notifyClassLoadError(e);
            },
            beanDefinitions: function (e) {
                var t = e.$package;
                Aria.$classes.push({ $classpath: t }), this.__waitingBeans[t] = e;
                var n = [];
                this._options.checkBeans && !this.__loadedBeans[this._BEANS_SCHEMA_PACKAGE] && t != this._BEANS_SCHEMA_PACKAGE && t != this._BASE_TYPES_PACKAGE && n.push(this._BEANS_SCHEMA_PACKAGE);
                var r = e.$dependencies || [];
                r.length && (n = n.concat(r));
                for (var i in e.$namespaces)
                    e.$namespaces.hasOwnProperty(i) && n.push(e.$namespaces[i]);
                var s = { JS: n }, o = aria.core.ClassMgr.loadClassDependencies(t, s, {
                        fn: this.__loadBeans,
                        scope: this,
                        args: t
                    });
                o && this.__loadBeans(t);
            },
            normalize: function (e, t) {
                return this._options.addDefaults = !0, e.beanDef = null, this.__logAllErrors(this._processJsonValidation(e), t);
            },
            check: function (e, t, n) {
                return this._options.checkEnabled ? (this._options.addDefaults = !1, this.__logAllErrors(this._processJsonValidation({
                    json: e,
                    beanName: t
                }), n)) : !0;
            },
            getBean: function (e) {
                return this._getBean(e);
            }
        }
    });
}})();