(function(){{
    var result = new    $that.compiler().compile(program,     $that.options);
    var guid =         $that.guid++, depth;
        $that.usePartial =     $that.usePartial || result.usePartial;
        $that.children[guid] = result;
    for (var i = 0, l = result.depths.list.length; i < l; i++) {
        depth = result.depths.list[i];
        if (depth < 2) {
            continue;
        } else {
                        $that.addDepth(depth - 1);
        }
    }
    return guid;
}})();