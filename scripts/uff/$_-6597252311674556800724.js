(function(){{
    if (!data.hook) {
        data.hook = {};
    }
    for (var i = 0; i < hooksToMerge.length; i++) {
        var key = hooksToMerge[i];
        var fromParent = data.hook[key];
        var ours = hooks[key];
        data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
    }
}})();