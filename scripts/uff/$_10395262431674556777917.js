(function(){{
    // `batchTrigger` the type on this...
    var args = can.makeArray(arguments), ev = args.shift();
    args[0] = (prop === '*' ? [
        parent.indexOf(child),
        args[0]
    ] : [
        prop,
        args[0]
    ]).join('.');
    // track objects dispatched on this map		
    ev.triggeredNS = ev.triggeredNS || {};
    // if it has already been dispatched exit
    if (ev.triggeredNS[parent._cid]) {
        return;
    }
    ev.triggeredNS[parent._cid] = true;
    // send change event with modified attr to parent	
    can.trigger(parent, ev, args);    // send modified attr event to parent
                                      //can.trigger(parent, args[0], args);
}})();