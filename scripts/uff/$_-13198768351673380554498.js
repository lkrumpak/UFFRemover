(function(){{
    var name = dust.helpers.tap(params.name, chunk, context), result;
    // Note that this only works because
    // dust renders are synchronous so
    // the .then() is called before this
    // helper function returns
    Template.render(name, context.stack.head).then(function (html) {
        result = html;
    });
    return chunk.write(result);
}})();