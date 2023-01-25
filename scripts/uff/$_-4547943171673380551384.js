(function(){{
    var instance, parentFragment, partials, root;
    parentFragment = component.parentFragment;
    root = component.root;
    partials = { content: contentDescriptor || [] };
    instance = new Component({
        el: parentFragment.pNode.cloneNode(false),
        data: data,
        partials: partials,
        _parent: root,
        adaptors: root.adaptors
    });
    instance.component = component;
    component.instance = instance;
    instance.insert(docFrag);
    instance.fragment.pNode = parentFragment.pNode;
    return instance;
}})();