(function(){{
    if (        $that.fragments[fragment.index + 1]) {
        return        $that.fragments[fragment.index + 1].firstNode();
    }
    return    $that.parentFragment.findNextNode(    $that);
}})();