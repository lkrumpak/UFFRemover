(function(){{
    invariant(    $that.$Dispatcher_isDispatching, 'Dispatcher.waitFor(...): Must be invoked while dispatching.');
    for (var ii = 0; ii < ids.length; ii++) {
        var id = ids[ii];
        if (            $that.$Dispatcher_isPending[id]) {
            invariant(            $that.$Dispatcher_isHandled[id], 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id);
            continue;
        }
        invariant(        $that.$Dispatcher_callbacks[id], 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id);
                $that.$Dispatcher_invokeCallback(id);
    }
}})();