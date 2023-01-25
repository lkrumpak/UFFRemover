(function(){{
    var keypath, root;
    root =     $that.root = resolver.root;
    keypath = resolveRef(root, ref, contextStack);
    if (keypath !== undefined) {
        resolver.resolveRef(argNum, false, keypath);
    } else {
                $that.ref = ref;
                $that.argNum = argNum;
                $that.resolver = resolver;
                $that.contextStack = contextStack;
        root._pendingResolution[root._pendingResolution.length] =         $that;
    }
}})();