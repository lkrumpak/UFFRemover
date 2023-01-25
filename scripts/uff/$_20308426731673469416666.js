(function(){{
    var attribute, previousValue, value;
    attribute =     $that.attr;
    previousValue = attribute.value;
    value =     $that.value();
    if (previousValue === undefined || !arrayContentsMatch(value, previousValue)) {
        attribute.receiving = true;
        attribute.value = value;
                $that.root.set(        $that.keypath, value);
        attribute.receiving = false;
    }
    return    $that;
}})();