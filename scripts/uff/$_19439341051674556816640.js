(function(){{
    if (!section.length) {
        fragmentOptions.contextStack = section.contextStack.concat(section.keypath);
        fragmentOptions.index = 0;
        section.fragments[0] = section.createFragment(fragmentOptions);
        section.length = 1;
    }
}})();