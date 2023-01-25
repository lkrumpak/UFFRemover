(function(){{
    LocationInfo.call(    $that, locInfo);
    if (mustache.sexpr.id.original !== close) {
        throw new Exception(mustache.sexpr.id.original + ' doesn\'t match ' + close,         $that);
    }
    content = new AST.ContentNode(content, locInfo);
        $that.type = 'block';
        $that.mustache = mustache;
        $that.program = new AST.ProgramNode([content], {}, locInfo);
}})();