(function(){{
    if (        $that.fragments[0]) {
        return        $that.fragments[0].firstNode();
    }
    return    $that.parentFragment.findNextNode(    $that);
}})();