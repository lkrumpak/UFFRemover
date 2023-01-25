(function(){{
    var result = env.VM.invokePartial.apply(    $that, arguments);
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
}})();