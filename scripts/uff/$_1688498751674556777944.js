(function(){{
    // Instead of using attr, use __get for performance.
    // Need to set reading
    if (can.__reading) {
        can.__reading(inst, inst.constructor.id);
    }
    return inst.__get(inst.constructor.id);
}})();