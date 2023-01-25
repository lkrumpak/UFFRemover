(function(){{
    var storage =     $that._ractive;
    storage.events[event.type].fire({
        node:         $that,
        original: event,
        index: storage.index,
        keypath: storage.keypath,
        context: storage.root.get(storage.keypath)
    });
}})();