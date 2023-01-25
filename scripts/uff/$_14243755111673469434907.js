(function(){{
    if (conditionFn()) {
        // Hook not needed (or it's not possible to use it due
        // to missing dependency), remove it.
        delete        $that.get;
        return;
    }
    // Hook needed; redefine it so that the support test is not executed again.
    return (    $that.get = hookFn).apply(    $that, arguments);
}})();