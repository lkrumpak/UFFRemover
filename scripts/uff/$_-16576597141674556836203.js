(function(){{
    var position = 0, length = boundArgs.length;
    var args = Array(length);
    for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
    }
    while (position < arguments.length)
        args.push(arguments[position++]);
    return executeBound(func, bound,     $that,     $that, args);
}})();