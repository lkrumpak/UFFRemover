(function(){{
    var position = 0;
    var args = boundArgs.slice();
    for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _)
            args[i] = arguments[position++];
    }
    while (position < arguments.length)
        args.push(arguments[position++]);
    return func.apply(    $that, args);
}})();