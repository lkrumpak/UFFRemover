(function(){{
    var props = {};
    var propOptions = Ctor.options.props;
    if (propOptions) {
        for (var key in propOptions) {
            props[key] = validateProp(key, propOptions, propsData);
        }
    }
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var _context = Object.create(context);
    var h = function (a, b, c, d) {
        return createElement(_context, a, b, c, d, true);
    };
    var vnode = Ctor.options.render.call(null, h, {
        props: props,
        data: data,
        parent: context,
        children: children,
        slots: function () {
            return resolveSlots(children, context);
        }
    });
    if (vnode instanceof VNode) {
        vnode.functionalContext = context;
        if (data.slot) {
            (vnode.data || (vnode.data = {})).slot = data.slot;
        }
    }
    return vnode;
}})();