(function(){{
    value = newValue;
    // might need a way to look up new and oldVal
    can.batch.trigger(computed, 'change', [
        newValue,
        oldValue
    ]);
}})();