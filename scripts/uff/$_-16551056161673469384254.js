(function(){{
    var e =     $that.originalEvent;
        $that.isImmediatePropagationStopped = returnTrue;
    if (e && e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
    }
        $that.stopPropagation();
}})();