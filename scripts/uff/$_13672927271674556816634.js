(function(){{
    var value =     $that.root.get(    $that.keypath);
    if (typeof value === 'function' && !value._nowrap) {
        value = wrapFunction(value,         $that.root,         $that.evaluator);
    }
    if (!isEqual(value,         $that.value)) {
                $that.evaluator.values[        $that.argNum] = value;
                $that.evaluator.bubble();
                $that.value = value;
    }
}})();