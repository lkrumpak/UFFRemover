(function(){{
    var value, options, i, len;
    value = [];
    options =     $that.node.options;
    len = options.length;
    for (i = 0; i < len; i += 1) {
        if (options[i].selected) {
            value[value.length] = options[i]._ractive.value;
        }
    }
    return value;
}})();