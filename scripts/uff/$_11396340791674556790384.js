(function(){{
    var node;
    if (element ===        $that.element) {
        return        $that;
    }
    if (        $that.childrenRepeater.length > 0) {
        for (var k = 0, kl =                 $that.childrenRepeater.length; k < kl; k++) {
            node =             $that.childrenRepeater[k].getNode(element);
            if (node) {
                return node;
            }
        }
    }
    for (var i = 0, l =             $that.children.length; i < l; i++) {
        node =         $that.children[i].getNode(element);
        if (node) {
            return node;
        }
    }
    return null;
}})();