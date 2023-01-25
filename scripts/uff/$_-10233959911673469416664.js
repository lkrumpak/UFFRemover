(function(){{
    var node, pNode;
    if (!        $that.nodes) {
        return;
    }
    while (        $that.nodes.length) {
        node =         $that.nodes.pop();
        node.parentNode.removeChild(node);
    }
    if (!html) {
                $that.nodes = [];
        return;
    }
    pNode =     $that.parentFragment.pNode;
        $that.nodes = insertHtml(html, pNode.tagName,     $that.docFrag);
    if (!        $that.initialising) {
        pNode.insertBefore(        $that.docFrag,         $that.parentFragment.findNextNode(        $that));
    }
}})();