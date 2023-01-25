(function(){{
    if (        $that.node) {
        if (            $that.node.parentNode) {
                        $that.node.parentNode.removeChild(            $that.node);
        }
        return        $that.node;
    }
}})();