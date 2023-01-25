(function(){{
    var name = 'on' + type;
    if (elem.detachEvent) {
        // #8545, #7054, preventing memory leaks for custom events in IE6-8
        // detachEvent needed property on element, by name of that event, to properly expose it to GC
        if (typeof elem[name] === strundefined) {
            elem[name] = null;
        }
        elem.detachEvent(name, handle);
    }
}})();