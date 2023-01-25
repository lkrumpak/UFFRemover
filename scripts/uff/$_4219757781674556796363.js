(function(){{
    LocationInfo.call(    $that, locInfo);
        $that.type = 'mustache';
        $that.strip = strip;
    // Open may be a string parsed from the parser or a passed boolean flag
    if (open != null && open.charAt) {
        // Must use charAt to support IE pre-10
        var escapeFlag = open.charAt(3) || open.charAt(2);
                $that.escaped = escapeFlag !== '{' && escapeFlag !== '&';
    } else {
                $that.escaped = !!open;
    }
    if (rawParams instanceof AST.SexprNode) {
                $that.sexpr = rawParams;
    } else {
        // Support old AST API
                $that.sexpr = new AST.SexprNode(rawParams, hash);
    }
        $that.sexpr.isRoot = true;
    // Support old AST API that stored this info in MustacheNode
        $that.id =     $that.sexpr.id;
        $that.params =     $that.sexpr.params;
        $that.hash =     $that.sexpr.hash;
        $that.eligibleHelper =     $that.sexpr.eligibleHelper;
        $that.isHelper =     $that.sexpr.isHelper;
}})();