(function(){{
    invariant(    $that.$Dispatcher_callbacks[id], 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id);
    delete    $that.$Dispatcher_callbacks[id];
}})();