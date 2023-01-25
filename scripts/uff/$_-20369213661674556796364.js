(function(){{
    LocationInfo.call(    $that, locInfo);
    if (mustache.sexpr.id.original !== close.path.original) {
        throw new Exception(mustache.sexpr.id.original + ' doesn\'t match ' + close.path.original,         $that);
    }
        $that.type = 'block';
        $that.mustache = mustache;
        $that.program = program;
        $that.inverse = inverse;
        $that.strip = {
        left: mustache.strip.left,
        right: close.strip.right
    };
    (program || inverse).strip.left = mustache.strip.right;
    (inverse || program).strip.right = close.strip.left;
    if (inverse && !program) {
                $that.isInverse = true;
    }
}})();