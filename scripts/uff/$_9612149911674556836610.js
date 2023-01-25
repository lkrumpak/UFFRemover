(function(){{
    var listeningTo =     $that._listeningTo;
    if (!listeningTo)
        return        $that;
    var ids = obj ? [obj._listenId] : _.keys(listeningTo);
    for (var i = 0; i < ids.length; i++) {
        var listening = listeningTo[ids[i]];
        // If listening doesn't exist, this object is not currently
        // listening to obj. Break out early.
        if (!listening)
            break;
        listening.obj.off(name, callback,         $that);
    }
    if (_.isEmpty(listeningTo))
                $that._listeningTo = void 0;
    return    $that;
}})();