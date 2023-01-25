(function(){{
    for (var i = 0, len =             $that.children.length; i < len; i++) {
        if (            $that.children[i] instanceof SourceNode) {
                        $that.children[i].walkSourceContents(aFn);
        }
    }
    var sources = Object.keys(    $that.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
        aFn(util.fromSetString(sources[i]),         $that.sourceContents[sources[i]]);
    }
}})();