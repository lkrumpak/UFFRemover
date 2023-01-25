(function(){{
    var chunk;
    for (var i = 0, len =             $that.children.length; i < len; i++) {
        chunk =         $that.children[i];
        if (chunk instanceof SourceNode) {
            chunk.walk(aFn);
        } else {
            if (chunk !== '') {
                aFn(chunk, {
                    source:                     $that.source,
                    line:                     $that.line,
                    column:                     $that.column,
                    name:                     $that.name
                });
            }
        }
    }
}})();