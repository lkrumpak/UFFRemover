(function(){{
    var node;
    if (        $that.nodes && destroy) {
        while (node =             $that.nodes.pop()) {
            node.parentNode.removeChild(node);
        }
    } else if (        $that.items) {
        while (            $that.items.length) {
                        $that.items.pop().teardown(destroy);
        }
    }
        $that.nodes =     $that.items =     $that.docFrag = null;
}})();