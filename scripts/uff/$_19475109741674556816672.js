(function(){{
    var eventName, binding, bindings, i, liveQueries, selector, query, nodesToRemove, j;
    if (        $that.fragment) {
                $that.fragment.teardown(false);
    }
    while (        $that.attributes.length) {
                $that.attributes.pop().teardown();
    }
    if (        $that.node) {
        for (eventName in            $that.node._ractive.events) {
                        $that.node._ractive.events[eventName].teardown();
        }
        if (binding =             $that.node._ractive.binding) {
            binding.teardown();
            bindings =             $that.root._twowayBindings[binding.attr.keypath];
            bindings.splice(bindings.indexOf(binding), 1);
        }
    }
    if (        $that.decorator) {
                $that.decorator.teardown();
    }
    if (        $that.descriptor.t2) {
        executeTransition(        $that.descriptor.t2,         $that.root,         $that,         $that.parentFragment.contextStack, false);
    }
    if (destroy) {
                $that.root._transitionManager.detachWhenReady(        $that);
    }
    if (liveQueries =         $that.liveQueries) {
        i = liveQueries.length;
        while (i--) {
            selector = liveQueries[i];
            if (nodesToRemove =                 $that.liveQueries[selector]) {
                j = nodesToRemove.length;
                query =                 $that.root._liveQueries[selector];
                while (j--) {
                    query._remove(nodesToRemove[j]);
                }
            }
        }
    }
}})();