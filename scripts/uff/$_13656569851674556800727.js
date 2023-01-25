(function(){{
    var this$1 =     $that;
    for (var key in        $that.cache) {
        var vnode = this$1.cache[key];
        callHook(vnode.child, 'deactivated');
        vnode.child.$destroy();
    }
}})();