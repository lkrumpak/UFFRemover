(function(){{
    var section =         $that, parentFragment, firstChange, changed, i, newLength, newFragments, toTeardown, fragmentOptions, fragment, nextNode;
    parentFragment =     $that.parentFragment;
    newFragments = [];
    newIndices.forEach(function (newIndex, oldIndex) {
        var by, oldKeypath, newKeypath;
        if (newIndex === oldIndex) {
            newFragments[newIndex] = section.fragments[oldIndex];
            return;
        }
        if (firstChange === undefined) {
            firstChange = oldIndex;
        }
        if (newIndex === -1) {
            (toTeardown || (toTeardown = [])).push(section.fragments[oldIndex]);
            return;
        }
        by = newIndex - oldIndex;
        oldKeypath = section.keypath + '.' + oldIndex;
        newKeypath = section.keypath + '.' + newIndex;
        reassignFragment(section.fragments[oldIndex], section.descriptor.i, oldIndex, newIndex, by, oldKeypath, newKeypath);
        newFragments[newIndex] = section.fragments[oldIndex];
        changed = true;
    });
    if (toTeardown) {
        while (fragment = toTeardown.pop()) {
            fragment.teardown(true);
        }
    }
    if (firstChange === undefined) {
        firstChange =         $that.length;
    }
    newLength =     $that.root.get(    $that.keypath).length;
    if (newLength === firstChange) {
        return;
    }
    fragmentOptions = {
        descriptor:         $that.descriptor.f,
        root:         $that.root,
        pNode: parentFragment.pNode,
        owner:         $that
    };
    if (        $that.descriptor.i) {
        fragmentOptions.indexRef =         $that.descriptor.i;
    }
    for (i = firstChange; i < newLength; i += 1) {
        if (fragment = newFragments[i]) {
                        $that.docFrag.appendChild(fragment.detach(false));
        } else {
            fragmentOptions.contextStack =             $that.contextStack.concat(            $that.keypath + '.' + i);
            fragmentOptions.index = i;
            fragment =             $that.createFragment(fragmentOptions);
        }
                $that.fragments[i] = fragment;
    }
    nextNode = parentFragment.findNextNode(    $that);
    parentFragment.pNode.insertBefore(    $that.docFrag, nextNode);
        $that.length = newLength;
}})();