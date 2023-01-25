(function(){{
    for (var name in observing) {
        var ob = observing[name];
        ob.observe.obj.unbind(ob.observe.attr, onchanged);
        delete observing[name];
    }
}})();