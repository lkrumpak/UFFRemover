(function(){{
    return fn ?     $that.bind(event_name, fn) :     $that.trigger(event_name);
}})();