(function(){{
    var i, arg;
        $that.root = root;
        $that.keypath = keypath;
        $that.priority = priority;
        $that.fn = getFunctionFromString(functionStr, args.length);
        $that.values = [];
        $that.refs = [];
    i = args.length;
    while (i--) {
        if (arg = args[i]) {
            if (arg[0]) {
                                $that.values[i] = arg[1];
            } else {
                                $that.refs[                $that.refs.length] = new Reference(root, arg[1],                 $that, i, priority);
            }
        } else {
                        $that.values[i] = undefined;
        }
    }
        $that.selfUpdating =     $that.refs.length <= 1;
        $that.update();
}})();