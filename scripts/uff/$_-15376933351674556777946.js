(function(){{
    can.Map.prototype.___set.call(    $that, prop, val);
    // If we add an `id`, move it to the store.
    if (prop ===        $that.constructor.id &&        $that._bindings) {
                $that.constructor.store[getId(        $that)] =         $that;
    }
}})();