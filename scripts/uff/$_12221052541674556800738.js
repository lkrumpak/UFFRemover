(function(){{
    addTransitionClass(el, toClass);
    removeTransitionClass(el, startClass);
    if (!cb.cancelled && !userWantsControl) {
        whenTransitionEnds(el, type, cb);
    }
}})();