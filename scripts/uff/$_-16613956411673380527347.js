(function(){{
    // Avoid `arguments` object use disqualifying optimizations by
    // converting it to an array before providing it to other functions.
    var length = arguments.length, index = length, args = Array(length);
    while (index--) {
        args[index] = arguments[index];
    }
    if (partials) {
        args = composeArgs(args, partials, holders);
    }
    if (partialsRight) {
        args = composeArgsRight(args, partialsRight, holdersRight);
    }
    if (isCurry || isCurryRight) {
        var placeholder = wrapper.placeholder, argsHolders = replaceHolders(args, placeholder);
        length -= argsHolders.length;
        if (length < arity) {
            var newArgPos = argPos ? arrayCopy(argPos) : undefined, newArity = nativeMax(arity - length, 0), newsHolders = isCurry ? argsHolders : undefined, newHoldersRight = isCurry ? undefined : argsHolders, newPartials = isCurry ? args : undefined, newPartialsRight = isCurry ? undefined : args;
            bitmask |= isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG;
            bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
            if (!isCurryBound) {
                bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
            }
            var newData = [
                    func,
                    bitmask,
                    thisArg,
                    newPartials,
                    newsHolders,
                    newPartialsRight,
                    newHoldersRight,
                    newArgPos,
                    ary,
                    newArity
                ], result = createHybridWrapper.apply(undefined, newData);
            if (isLaziable(func)) {
                setData(result, newData);
            }
            result.placeholder = placeholder;
            return result;
        }
    }
    var thisBinding = isBind ? thisArg :         $that, fn = isBindKey ? thisBinding[func] : func;
    if (argPos) {
        args = reorder(args, argPos);
    }
    if (isAry && ary < args.length) {
        args.length = ary;
    }
    if (        $that &&        $that !== root &&        $that instanceof wrapper) {
        fn = Ctor || createCtorWrapper(func);
    }
    return fn.apply(thisBinding, args);
}})();