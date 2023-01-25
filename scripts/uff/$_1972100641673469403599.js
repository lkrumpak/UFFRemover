(function(){{
    if (hash) {
        context = Utils.extend({}, context, hash);
    }
    var result = env.VM.invokePartial.call(    $that, partial, name, context, helpers, partials, data, depths);
    if (result == null && env.compile) {
        var options = {
            helpers: helpers,
            partials: partials,
            data: data,
            depths: depths
        };
        partials[name] = env.compile(partial, {
            data: data !== undefined,
            compat: templateSpec.compat
        }, env);
        result = partials[name](context, options);
    }
    if (result != null) {
        if (indent) {
            var lines = result.split('\n');
            for (var i = 0, l = lines.length; i < l; i++) {
                if (!lines[i] && i + 1 === l) {
                    break;
                }
                lines[i] = indent + lines[i];
            }
            result = lines.join('\n');
        }
        return result;
    } else {
        throw new Exception('The partial ' + name + ' could not be compiled when running in runtime-only mode');
    }
}})();