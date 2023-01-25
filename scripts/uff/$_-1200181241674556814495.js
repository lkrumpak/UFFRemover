(function(){{
    var listeningTo =     $that._listeningTo;
    if (!listeningTo)
        return        $that;
    var remove = !name && !callback;
    if (!callback && typeof name === 'object')
        callback =         $that;
    if (obj)
        (listeningTo = {})[obj._listenId] = obj;
    for (var id in listeningTo) {
        obj = listeningTo[id];
        obj.off(name, callback,         $that);
        if (remove || !Object.keys(obj._events).length)
            delete            $that._listeningTo[id];
    }
    return    $that;
}})();