(function(){{
    // try to add things as early as possible to the store (#457)
    // we add things to the store before any properties are even set
    var id = attrs && attrs[    $that.constructor.id];
    if (can.Model._reqs && id !== null) {
                $that.constructor.store[id] =         $that;
    }
    can.Map.prototype.setup.apply(    $that, arguments);
}})();