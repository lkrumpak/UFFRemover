(function(){{
    var condition = conditionFn();
    if (condition == null) {
        // The test was not ready at this point; screw the hook this time
        // but check again when needed next time.
        return;
    }
    if (condition) {
        // Hook not needed (or it's not possible to use it due to missing dependency),
        // remove it.
        // Since there are no other hooks for marginRight, remove the whole object.
        delete        $that.get;
        return;
    }
    // Hook needed; redefine it so that the support test is not executed again.
    return (    $that.get = hookFn).apply(    $that, arguments);
}})();