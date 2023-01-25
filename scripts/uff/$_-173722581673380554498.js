(function(){{
    var key = dust.helpers.tap(params.key, chunk, context), environment = dust.helpers.tap(params.environment, chunk, context), value = environment ? Config.get(environment, key) : Config.get(key), args = [value], i = -1, currentEnvironment, arg;
    if (params.only || params.not) {
        currentEnvironment = Config.currentEnvironment();
        if (params.only && currentEnvironment === params.only || params.not && currentEnvironment !== params.not) {
            return bodies.block ? chunk.render(bodies.block, context) : chunk;
        } else {
            return bodies['else'] ? chunk.render(bodies['else'], context) : chunk;
        }
    }
    if (!value) {
        return bodies.block ? chunk.render(bodies.block, context) : chunk;
    }
    arg = params['p' + ++i];
    while (typeof arg !== 'undefined') {
        args.push(dust.helpers.tap(arg, chunk, context));
        arg = params['p' + ++i];
    }
    return chunk.write(StringUtils.format.apply(    $that, args));
}})();