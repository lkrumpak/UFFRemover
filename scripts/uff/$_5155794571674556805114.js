(function(){{
    return {
        val: newVal,
        type: _.isArray(newVal) ? 'array' : typeof newVal
    };
}})();