(function(){{
    Aria.testMode = !0;
    var e = Aria.rootTemplates;
    if (e)
        for (var t = 0, n = e.length; t < n; t++) {
            var r = e[t];
            r.$refresh();
        }
}})();