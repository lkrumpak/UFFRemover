(function(){{
    var i, attribute, storage, masterEventName, proxies, proxy, binding, bindings, liveQueries, ractive;
    i = element.attributes.length;
    while (i--) {
        attribute = element.attributes[i];
        if (attribute.fragment) {
            reassignFragment(attribute.fragment, indexRef, oldIndex, newIndex, by, oldKeypath, newKeypath);
            if (attribute.twoway) {
                attribute.updateBindings();
            }
        }
    }
    if (storage = element.node._ractive) {
        if (storage.keypath.substr(0, oldKeypath.length) === oldKeypath) {
            storage.keypath = storage.keypath.replace(oldKeypath, newKeypath);
        }
        if (indexRef !== undefined) {
            storage.index[indexRef] = newIndex;
        }
        for (masterEventName in storage.events) {
            proxies = storage.events[masterEventName].proxies;
            i = proxies.length;
            while (i--) {
                proxy = proxies[i];
                if (typeof proxy.n === 'object') {
                    reassignFragment(proxy.a, indexRef, oldIndex, newIndex, by, oldKeypath, newKeypath);
                }
                if (proxy.d) {
                    reassignFragment(proxy.d, indexRef, oldIndex, newIndex, by, oldKeypath, newKeypath);
                }
            }
        }
        if (binding = storage.binding) {
            if (binding.keypath.substr(0, oldKeypath.length) === oldKeypath) {
                bindings = storage.root._twowayBindings[binding.keypath];
                bindings.splice(bindings.indexOf(binding), 1);
                binding.keypath = binding.keypath.replace(oldKeypath, newKeypath);
                bindings = storage.root._twowayBindings[binding.keypath] || (storage.root._twowayBindings[binding.keypath] = []);
                bindings.push(binding);
            }
        }
    }
    if (element.fragment) {
        reassignFragment(element.fragment, indexRef, oldIndex, newIndex, by, oldKeypath, newKeypath);
    }
    if (liveQueries = element.liveQueries) {
        ractive = element.root;
        i = liveQueries.length;
        while (i--) {
            ractive._liveQueries[liveQueries[i]]._makeDirty();
        }
    }
}})();