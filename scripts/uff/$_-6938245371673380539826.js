(function(){{
    var def =     $that._definition[property];
    if (def.type === 'boolean') {
        // if it's a bool, just flip it
                $that[property] = !        $that[property];
    } else if (def && def.values) {
        // If it's a property with an array of values
        // skip to the next one looping back if at end.
                $that[property] = arrayNext(def.values,         $that[property]);
    } else {
        throw new TypeError('Can only toggle properties that are type `boolean` or have `values` array.');
    }
    return    $that;
}})();