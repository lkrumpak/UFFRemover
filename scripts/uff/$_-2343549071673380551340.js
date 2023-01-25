(function(){{
    var values, keypath;
    values = getPattern(    $that.root,     $that.keypath);
    if (immediate !== false) {
        for (keypath in values) {
            if (values.hasOwnProperty(keypath)) {
                                $that.update(keypath);
            }
        }
    } else {
                $that.values = values;
    }
}})();