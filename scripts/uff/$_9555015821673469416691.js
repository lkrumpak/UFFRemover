(function(){{
    var parentFragment, root, Component, data, toBind;
    parentFragment = component.parentFragment = options.parentFragment;
    root = parentFragment.root;
    component.root = root;
    component.type = types.COMPONENT;
    component.name = options.descriptor.e;
    component.index = options.index;
    component.observers = [];
    Component = root.components[options.descriptor.e];
    if (!Component) {
        throw new Error('Component "' + options.descriptor.e + '" not found');
    }
    toBind = [];
    data = createModel(component, options.descriptor.a, toBind);
    createInstance(component, Component, data, docFrag, options.descriptor.f);
    createObservers(component, toBind);
    propagateEvents(component, options.descriptor.v);
    if (options.descriptor.t1 || options.descriptor.t2 || options.descriptor.o) {
        warn('The "intro", "outro" and "decorator" directives have no effect on components');
    }
    updateLiveQueries(component);
}})();