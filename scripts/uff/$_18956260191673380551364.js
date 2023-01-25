(function(){{
    var value =         $that.fragment.getValue(), options, i;
    if (!isArray(value)) {
        value = [value];
    }
    options =     $that.pNode.options;
    i = options.length;
    while (i--) {
        options[i].selected = value.indexOf(options[i]._ractive.value) !== -1;
    }
        $that.value = value;
    return    $that;
}})();