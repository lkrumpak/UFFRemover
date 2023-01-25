(function(){{
    var this$1 =     $that;
    if (        $that.active) {
        // remove self from vm's watcher list
        // this is a somewhat expensive operation so we skip it
        // if the vm is being destroyed.
        if (!            $that.vm._isBeingDestroyed) {
            remove$1(            $that.vm._watchers,             $that);
        }
        var i =         $that.deps.length;
        while (i--) {
            this$1.deps[i].removeSub(this$1);
        }
                $that.active = false;
    }
}})();