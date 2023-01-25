(function(){{
    // If the compute is no longer bound (because the same change event led to an unbind)
    // then do not call getValueAndBind, or we will leak bindings.
    if (computeState && !computeState.bound) {
        return;
    }
    if (ev.batchNum === undefined || ev.batchNum !== batchNum) {
        // store the old value
        var oldValue = data.value,
            // get the new value
            newvalue = getValueAndBind();
        // update the value reference (in case someone reads)
        data.value = newvalue;
        // if a change happened
        if (newvalue !== oldValue) {
            callback(newvalue, oldValue);
        }
        batchNum = batchNum = ev.batchNum;
    }
}})();