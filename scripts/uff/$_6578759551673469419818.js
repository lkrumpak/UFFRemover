(function(){{
    return fn ?     $that.bind(name, fn) :     $that.trigger(name);
}})();