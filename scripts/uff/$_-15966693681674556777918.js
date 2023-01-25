(function(){{
    // Go through each property.
    map.each(function (val, name) {
        // If the value is an `object`, and has an `attrs` or `serialize` function.
        where[name] = Map.helpers.canMakeObserve(val) && can.isFunction(val[how]) ? // Call `attrs` or `serialize` to get the original data back.
        val[how]() : // Otherwise return the value.
        val;
        if (can.__reading) {
            can.__reading(map, name);
        }
    });
    if (can.__reading) {
        can.__reading(map, '__keys');
    }
    return where;
}})();