(function(){{
    if (!env) {
        throw new Exception('No environment passed to template');
    }
    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as psuedo-supported APIs.
    var invokePartialWrapper = function (partial, name, context, helpers, partials, data) {
        var result = env.VM.invokePartial.apply(this, arguments);
        if (result != null) {
            return result;
        }
        if (env.compile) {
            var options = {
                helpers: helpers,
                partials: partials,
                data: data
            };
            partials[name] = env.compile(partial, { data: data !== undefined }, env);
            return partials[name](context, options);
        } else {
            throw new Exception('The partial ' + name + ' could not be compiled when running in runtime-only mode');
        }
    };
    // Just add water
    var container = {
        escapeExpression: Utils.escapeExpression,
        invokePartial: invokePartialWrapper,
        programs: [],
        program: function (i, fn, data) {
            var programWrapper = this.programs[i];
            if (data) {
                programWrapper = program(i, fn, data);
            } else if (!programWrapper) {
                programWrapper = this.programs[i] = program(i, fn);
            }
            return programWrapper;
        },
        merge: function (param, common) {
            var ret = param || common;
            if (param && common && param !== common) {
                ret = {};
                Utils.extend(ret, common);
                Utils.extend(ret, param);
            }
            return ret;
        },
        programWithDepth: env.VM.programWithDepth,
        noop: env.VM.noop,
        compilerInfo: null
    };
    return function (context, options) {
        options = options || {};
        var namespace = options.partial ? options : env, helpers, partials;
        if (!options.partial) {
            helpers = options.helpers;
            partials = options.partials;
        }
        var result = templateSpec.call(container, namespace, context, helpers, partials, options.data);
        if (!options.partial) {
            env.VM.checkRevision(container.compilerInfo);
        }
        return result;
    };
}})();