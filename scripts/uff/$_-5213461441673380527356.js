(function(){{
    transforms = baseFlatten(transforms);
    if (typeof func != 'function' || !arrayEvery(transforms, baseIsFunction)) {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    var length = transforms.length;
    return restParam(function (args) {
        var index = nativeMin(args.length, length);
        while (index--) {
            args[index] = transforms[index](args[index]);
        }
        return func.apply(this, args);
    });
}})();