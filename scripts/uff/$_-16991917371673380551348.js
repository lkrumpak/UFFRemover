(function(){{
    var id, fragmentsById;
    fragmentsById = section.fragmentsById || (section.fragmentsById = create(null));
    for (id in fragmentsById) {
        if (value[id] === undefined && fragmentsById[id]) {
            fragmentsById[id].teardown(true);
            fragmentsById[id] = null;
        }
    }
    for (id in value) {
        if (value[id] !== undefined && !fragmentsById[id]) {
            fragmentOptions.contextStack = section.contextStack.concat(section.keypath + '.' + id);
            fragmentOptions.index = id;
            if (section.descriptor.i) {
                fragmentOptions.indexRef = section.descriptor.i;
            }
            fragmentsById[id] = section.createFragment(fragmentOptions);
        }
    }
}})();