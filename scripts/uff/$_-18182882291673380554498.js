(function(){{
    var key = dust.helpers.tap(params.key, chunk, context), locale = dust.helpers.tap(params.locale, chunk, context), translation = Translation.get(key, locale), args = [translation], i = -1, arg;
    if (!translation) {
        return bodies.block ? chunk.render(bodies.block, context) : chunk;
    }
    arg = params['p' + ++i];
    while (typeof arg !== 'undefined') {
        args.push(dust.helpers.tap(arg, chunk, context));
        arg = params['p' + ++i];
    }
    return chunk.write(StringUtils.format.apply(    $that, args));
}})();