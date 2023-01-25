(function(){{
    //Bind any waiting define() calls to this context,
    //fix for #408
    takeGlobalQueue();
    var map = makeModuleMap(id, relMap, true), mod = getOwn(registry, id);
    removeScript(id);
    delete defined[id];
    delete urlFetched[map.url];
    delete undefEvents[id];
    //Clean queued defines too. Go backwards
    //in array so that the splices do not
    //mess up the iteration.
    eachReverse(defQueue, function (args, i) {
        if (args[0] === id) {
            defQueue.splice(i, 1);
        }
    });
    if (mod) {
        //Hold on to listeners in case the
        //module will be attempted to be reloaded
        //using a different config.
        if (mod.events.defined) {
            undefEvents[id] = mod.events;
        }
        cleanRegistry(id);
    }
}})();