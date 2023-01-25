(function(){{
    var value =     $that.root.get(    $that.keypath);
    if (!isEqual(value,         $that.value)) {
                $that.evaluator.bubble();
                $that.value = value;
    }
}})();