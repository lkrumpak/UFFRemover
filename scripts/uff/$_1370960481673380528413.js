(function(){{
    if (!obj)
        return        $that;
    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
    var listeningTo =     $that._listeningTo || (    $that._listeningTo = {});
    var listening = listeningTo[id];
    // This object is not listening to any other events on `obj` yet.
    // Setup the necessary references to track the listening callbacks.
    if (!listening) {
        var thisId =         $that._listenId || (        $that._listenId = _.uniqueId('l'));
        listening = listeningTo[id] = {
            obj: obj,
            objId: id,
            id: thisId,
            listeningTo: listeningTo,
            count: 0
        };
    }
    // Bind callbacks on obj, and keep track of them on listening.
    internalOn(obj, name, callback,     $that, listening);
    return    $that;
}})();