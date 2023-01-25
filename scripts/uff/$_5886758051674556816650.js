(function(){{
    var options, i, len;
    options =     $that.node.options;
    len = options.length;
    for (i = 0; i < len; i += 1) {
        if (options[i].selected) {
            return options[i]._ractive.value;
        }
    }
}})();