(function(){{
    var expression, i, len, ref, indexRefs;
        $that.root = mustache.root;
        $that.mustache = mustache;
        $that.args = [];
        $that.scouts = [];
    expression = mustache.descriptor.x;
    indexRefs = mustache.parentFragment.indexRefs;
        $that.str = expression.s;
    len =     $that.unresolved =     $that.args.length = expression.r ? expression.r.length : 0;
    if (!len) {
                $that.resolved =         $that.ready = true;
                $that.bubble();
        return;
    }
    for (i = 0; i < len; i += 1) {
        ref = expression.r[i];
        if (indexRefs && indexRefs[ref] !== undefined) {
                        $that.resolveRef(i, true, indexRefs[ref]);
        } else {
                        $that.scouts[            $that.scouts.length] = new ReferenceScout(            $that, ref, mustache.contextStack, i);
        }
    }
        $that.ready = true;
        $that.bubble();
}})();