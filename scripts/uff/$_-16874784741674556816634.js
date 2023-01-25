(function(){{
    var value;
        $that.evaluator = evaluator;
        $that.keypath = keypath;
        $that.root = root;
        $that.argNum = argNum;
        $that.type = types.REFERENCE;
        $that.priority = priority;
    value = root.get(keypath);
    if (typeof value === 'function') {
        value = wrapFunction(value, root, evaluator);
    }
        $that.value = evaluator.values[argNum] = value;
    registerDependant(    $that);
}})();