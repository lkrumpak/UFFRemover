(function(){{
    var attribute =         $that.attr, value =         $that.value();
    attribute.receiving = true;
    attribute.root.set(attribute.keypath, value);
    attribute.receiving = false;
}})();