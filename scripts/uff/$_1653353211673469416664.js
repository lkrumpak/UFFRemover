(function(){{
    if (        $that.nodes[0]) {
        return        $that.nodes[0];
    }
    return    $that.parentFragment.findNextNode(    $that);
}})();