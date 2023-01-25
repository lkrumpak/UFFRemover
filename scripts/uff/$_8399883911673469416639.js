(function(){{
    var bindings, childDeps, i, binding, oldValue, newValue;
    bindings = ractive._twowayBindings[keypath];
    if (bindings) {
        i = bindings.length;
        while (i--) {
            binding = bindings[i];
            if (binding.radioName && !binding.node.checked) {
                continue;
            }
            if (binding.checkboxName) {
                if (binding.changed() && !deferredCheckboxes[keypath]) {
                    deferredCheckboxes[keypath] = true;
                    deferredCheckboxes[deferredCheckboxes.length] = keypath;
                }
                continue;
            }
            oldValue = binding.attr.value;
            newValue = binding.value();
            if (arrayContentsMatch(oldValue, newValue)) {
                continue;
            }
            if (!isEqual(oldValue, newValue)) {
                values[keypath] = newValue;
            }
        }
    }
    if (!cascade) {
        return;
    }
    childDeps = ractive._depsMap[keypath];
    if (childDeps) {
        i = childDeps.length;
        while (i--) {
            consolidateChangedValues(ractive, childDeps[i], values, deferredCheckboxes, cascade);
        }
    }
}})();