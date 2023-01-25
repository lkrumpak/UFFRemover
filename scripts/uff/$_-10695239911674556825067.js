(function(){{
    var newChildren;
    var i;
    var len =     $that.children.length;
    if (len > 0) {
        newChildren = [];
        for (i = 0; i < len - 1; i++) {
            newChildren.push(            $that.children[i]);
            newChildren.push(aSep);
        }
        newChildren.push(        $that.children[i]);
                $that.children = newChildren;
    }
    return    $that;
}})();