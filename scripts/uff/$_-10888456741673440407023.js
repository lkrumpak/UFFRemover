(function(){{
    return function (a) {
        var b = a.childNodes;
        for (a = a.childNodes.length - 1; 0 <= a; a--) {
            var c = b[a].nodeType;
            if (1 === c || 3 == c)
                return !1;
        }
        return !0;
    };
}})();