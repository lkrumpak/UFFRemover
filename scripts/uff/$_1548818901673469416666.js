(function(){{
    var value =     $that.value();
        $that.attr.receiving = true;
        $that.attr.value = value;
        $that.root.set(    $that.keypath, value);
        $that.attr.receiving = false;
    return    $that;
}})();