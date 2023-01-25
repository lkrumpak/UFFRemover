(function(){{
    var original;
    if (        $that.isNew()) {
        return        $that;
    }
    original =     $that.constructor.find(    $that.id);
        $that.load(original.attributes());
    return original;
}})();