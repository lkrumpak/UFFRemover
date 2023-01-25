(function(){{
    var i, length, fragmentsToRemove;
    length = value.length;
    if (length < section.length) {
        fragmentsToRemove = section.fragments.splice(length, section.length - length);
        while (fragmentsToRemove.length) {
            fragmentsToRemove.pop().teardown(true);
        }
    } else {
        if (length > section.length) {
            for (i = section.length; i < length; i += 1) {
                fragmentOptions.contextStack = section.contextStack.concat(section.keypath + '.' + i);
                fragmentOptions.index = i;
                if (section.descriptor.i) {
                    fragmentOptions.indexRef = section.descriptor.i;
                }
                section.fragments[i] = section.createFragment(fragmentOptions);
            }
        }
    }
    section.length = length;
}})();