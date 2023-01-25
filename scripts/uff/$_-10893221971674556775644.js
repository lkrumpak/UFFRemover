(function(){{
    var e =         $that, t = Aria.$frameworkWindow.document;
    for (var n = 0; n < t.styleSheets.length; n++)
        if (t.styleSheets[n].disabled) {
            setTimeout(function () {
                e._checkCSSLoaded();
            }, 16);
            return;
        }
        $that._raiseReadyEvent();
}})();