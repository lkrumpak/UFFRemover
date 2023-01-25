(function(){{
    var isBind = bitmask & BIND_FLAG, Ctor = createCtorWrapper(func);
    function wrapper() {
        // Avoid `arguments` object use disqualifying optimizations by
        // converting it to an array before providing it `func`.
        var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength);
        while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
        }
        var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, args);
    }
    return wrapper;
}})();