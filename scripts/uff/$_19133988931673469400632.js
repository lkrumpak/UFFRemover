(function(){{
    var vnodeComponentOptions = vnode.componentOptions;
    var options = {
        _isComponent: true,
        parent: parent,
        propsData: vnodeComponentOptions.propsData,
        _componentTag: vnodeComponentOptions.tag,
        _parentVnode: vnode,
        _parentListeners: vnodeComponentOptions.listeners,
        _renderChildren: vnodeComponentOptions.children,
        _parentElm: parentElm || null,
        _refElm: refElm || null
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (inlineTemplate) {
        options.render = inlineTemplate.render;
        options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnodeComponentOptions.Ctor(options);
}})();