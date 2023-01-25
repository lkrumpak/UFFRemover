(function(){{
    var parentFragment =         $that.parentFragment = options.parentFragment, descriptor;
        $that.type = types.PARTIAL;
        $that.name = options.descriptor.r;
        $that.index = options.index;
    if (!options.descriptor.r) {
        throw new Error('Partials must have a static reference (no expressions). This may change in a future version of Ractive.');
    }
    descriptor = getPartialDescriptor(parentFragment.root, options.descriptor.r);
        $that.fragment = new DomFragment({
        descriptor: descriptor,
        root: parentFragment.root,
        pNode: parentFragment.pNode,
        contextStack: parentFragment.contextStack,
        owner:         $that
    });
    if (docFrag) {
        docFrag.appendChild(        $that.fragment.docFrag);
    }
}})();