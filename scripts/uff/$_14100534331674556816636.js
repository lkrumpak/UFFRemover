(function(){{
    var i, keypath, ref;
    if (!        $that.softRefs) {
                $that.softRefs = [];
    }
    i =     $that.softRefs.length;
    while (i--) {
        ref =         $that.softRefs[i];
        if (!softDeps[ref.keypath]) {
                        $that.softRefs.splice(i, 1);
                        $that.softRefs[ref.keypath] = false;
            ref.teardown();
        }
    }
    i = softDeps.length;
    while (i--) {
        keypath = softDeps[i];
        if (!            $that.softRefs[keypath]) {
            ref = new SoftReference(            $that.root, keypath,             $that);
                        $that.softRefs[            $that.softRefs.length] = ref;
                        $that.softRefs[keypath] = true;
        }
    }
        $that.selfUpdating =     $that.refs.length +    $that.softRefs.length <= 1;
}})();