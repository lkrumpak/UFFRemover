(function(){{
    var storage = event.node._ractive;
    event.index = storage.index;
    event.keypath = storage.keypath;
    event.context = storage.root.get(storage.keypath);
    storage.events[eventName].fire(event);
}})();