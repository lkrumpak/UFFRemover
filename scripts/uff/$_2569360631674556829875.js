(function(){{
    var domNode = document.getElementById(id);
    'production' !== 'development' ? invariant(domNode, 'Tried to get element with id of "%s" but it is not present on the page.', id) : invariant(domNode);
    return ReactMount.constructAndRenderComponent(constructor, props, domNode);
}})();