(function(){{
    var holdersLength = holders.length, argsIndex = -1, argsLength = nativeMax(args.length - holdersLength, 0), leftIndex = -1, leftLength = partials.length, result = Array(leftLength + argsLength);
    while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
    }
    while (++argsIndex < holdersLength) {
        result[holders[argsIndex]] = args[argsIndex];
    }
    while (argsLength--) {
        result[leftIndex++] = args[argsIndex++];
    }
    return result;
}})();