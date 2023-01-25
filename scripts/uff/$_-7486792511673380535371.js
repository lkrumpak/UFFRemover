(function(){{
    var vnode = getFirstComponentChild(    $that.$slots.default);
    if (vnode && vnode.componentOptions) {
        var opts = vnode.componentOptions;
        // check pattern
        var name = opts.Ctor.options.name || opts.tag;
        if (name && (            $that.include && !matches(            $that.include, name) ||            $that.exclude && matches(            $that.exclude, name))) {
            return vnode;
        }
        var key = vnode.key == null    // same constructor may get registered as different local components
                // so cid alone is not enough (#3269)
 ? opts.Ctor.cid + (opts.tag ? '::' + opts.tag : '') : vnode.key;
        if (            $that.cache[key]) {
            vnode.child =             $that.cache[key].child;
        } else {
                        $that.cache[key] = vnode;
        }
        vnode.data.keepAlive = true;
    }
    return vnode;
}})();