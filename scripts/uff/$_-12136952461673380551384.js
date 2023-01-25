(function(){{
    var parameter, parsed, root, parentFragment, keypath;
    root = component.root;
    parentFragment = component.parentFragment;
    if (typeof descriptor === 'string') {
        parsed = parseJSON(descriptor);
        return parsed ? parsed.value : descriptor;
    }
    if (descriptor === null) {
        return true;
    }
    if (descriptor.length === 1 && descriptor[0].t === types.INTERPOLATOR && descriptor[0].r) {
        if (parentFragment.indexRefs && parentFragment.indexRefs[descriptor[0].r] !== undefined) {
            return parentFragment.indexRefs[descriptor[0].r];
        }
        keypath = resolveRef(root, descriptor[0].r, parentFragment.contextStack) || descriptor[0].r;
        toBind.push({
            childKeypath: key,
            parentKeypath: keypath
        });
        return root.get(keypath);
    }
    parameter = new ComponentParameter(component, key, descriptor);
    component.complexParameters.push(parameter);
    return parameter.value;
}})();