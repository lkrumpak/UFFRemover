(function(){{
    /* istanbul ignore if */
    if (!hasTransition) {
        return false;
    }
    if (        $that._hasMove != null) {
        return        $that._hasMove;
    }
    addTransitionClass(el, moveClass);
    var info = getTransitionInfo(el);
    removeTransitionClass(el, moveClass);
    return    $that._hasMove = info.hasTransform;
}})();