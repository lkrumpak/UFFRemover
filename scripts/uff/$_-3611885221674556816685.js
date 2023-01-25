(function(){{
    var index = item.index;
    if (        $that.items[index + 1]) {
        return        $that.items[index + 1].firstNode();
    }
    if (        $that.owner ===        $that.root) {
        if (!            $that.owner.component) {
            return null;
        }
        return        $that.owner.component.findNextNode();
    }
    return    $that.owner.findNextNode(    $that);
}})();