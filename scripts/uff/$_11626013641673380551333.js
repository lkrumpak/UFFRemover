(function(){{
    var values, deferredCheckboxes, i;
    if (typeof keypath !== 'string') {
        keypath = '';
        cascade = true;
    }
    consolidateChangedValues(    $that, keypath, values = {}, deferredCheckboxes = [], cascade);
    if (i = deferredCheckboxes.length) {
        while (i--) {
            keypath = deferredCheckboxes[i];
            values[keypath] = getValueFromCheckboxes(            $that, keypath);
        }
    }
        $that.set(values);
}})();