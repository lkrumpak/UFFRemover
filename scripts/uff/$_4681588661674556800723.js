(function(){{
    if (!Ctor) {
        return;
    }
    var baseCtor = context.$options._base;
    if (isObject(Ctor)) {
        Ctor = baseCtor.extend(Ctor);
    }
    if (typeof Ctor !== 'function') {
        {
            warn('Invalid Component definition: ' + String(Ctor), context);
        }
        return;
    }
    // async component
    if (!Ctor.cid) {
        if (Ctor.resolved) {
            Ctor = Ctor.resolved;
        } else {
            Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
                // it's ok to queue this on every render because
                // $forceUpdate is buffered by the scheduler.
                context.$forceUpdate();
            });
            if (!Ctor) {
                // return nothing if this is indeed an async component
                // wait for the callback to trigger parent update.
                return;
            }
        }
    }
    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);
    data = data || {};
    // extract props
    var propsData = extractProps(data, Ctor);
    // functional component
    if (Ctor.options.functional) {
        return createFunctionalComponent(Ctor, propsData, data, context, children);
    }
    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    data.on = data.nativeOn;
    if (Ctor.options.abstract) {
        // abstract components do not keep anything
        // other than props & listeners
        data = {};
    }
    // merge component management hooks onto the placeholder node
    mergeHooks(data);
    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode('vue-component-' + Ctor.cid + (name ? '-' + name : ''), data, undefined, undefined, undefined, context, {
        Ctor: Ctor,
        propsData: propsData,
        listeners: listeners,
        tag: tag,
        children: children
    });
    return vnode;
}})();