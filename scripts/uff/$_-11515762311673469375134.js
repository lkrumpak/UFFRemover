(function(){{
    var t = Aria.$frameworkWindow.document, n =         $that;
    t.readyState === 'complete' ?     $that._raiseReadyEvent() : e && setTimeout(function () {
        n._checkReadyState();
    }, 16);
}})();