(function(){{
    var ast = el.children[0];
    if ('development' !== 'production' && (el.children.length > 1 || ast.type !== 1)) {
        warn$2('Inline-template components must have exactly one child element.');
    }
    if (ast.type === 1) {
        var inlineRenderFns = generate(ast, currentOptions);
        return 'inlineTemplate:{render:function(){' + inlineRenderFns.render + '},staticRenderFns:[' + inlineRenderFns.staticRenderFns.map(function (code) {
            return 'function(){' + code + '}';
        }).join(',') + ']}';
    }
}})();