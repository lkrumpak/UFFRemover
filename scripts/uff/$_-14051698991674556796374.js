(function(){{
    var statements = program.statements;
    for (var i = 0, l = statements.length; i < l; i++) {
                $that.accept(statements[i]);
    }
        $that.isSimple = l === 1;
        $that.depths.list =     $that.depths.list.sort(function (a, b) {
        return a - b;
    });
    return    $that;
}})();