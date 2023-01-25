(function(){{
    var arr = attrs.split('|'), i = attrs.length;
    while (i--) {
        Expr.attrHandle[arr[i]] = handler;
    }
}})();