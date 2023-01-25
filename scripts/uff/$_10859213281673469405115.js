(function(){{
    var listeners =     $that._listeners;
    if (!listeners)
        return        $that;
    var deleteListener = !name && !callback;
    if (typeof name === 'object')
        callback =         $that;
    if (obj)
        (listeners = {})[obj._listenerId] = obj;
    for (var id in listeners) {
        listeners[id].off(name, callback,         $that);
        if (deleteListener)
            delete            $that._listeners[id];
    }
    return    $that;
}})();