(function(){{
    var e =     $that;
    try {
        Aria.$frameworkWindow.document.documentElement.doScroll('left');
    } catch (t) {
        setTimeout(function () {
            e._checkScroll();
        }, 16);
        return;
    }
        $that._raiseReadyEvent();
}})();