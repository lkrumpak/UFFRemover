(function(){{
    var i, fragment, indexRef, oldIndex, newIndex, oldKeypath, newKeypath;
    indexRef = section.descriptor.i;
    for (i = start; i < end; i += 1) {
        fragment = section.fragments[i];
        oldIndex = i - by;
        newIndex = i;
        oldKeypath = section.keypath + '.' + (i - by);
        newKeypath = section.keypath + '.' + i;
        fragment.index += by;
        reassignFragment(fragment, indexRef, oldIndex, newIndex, by, oldKeypath, newKeypath);
    }
    preDomUpdate(root);
}})();