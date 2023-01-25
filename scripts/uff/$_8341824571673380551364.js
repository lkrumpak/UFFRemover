(function(){{
    var value =         $that.fragment.getValue(), options, option, i;
        $that.value =     $that.pNode._ractive.value = value;
    options =     $that.pNode.options;
    i = options.length;
    while (i--) {
        option = options[i];
        if (option._ractive.value == value) {
            option.selected = true;
            return            $that;
        }
    }
    return    $that;
}})();