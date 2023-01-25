(function(){{
    var node, next;
    if (typeof id == 'number' && !        $that.items[id]) {
        next =         $that.getNextItem(id);
        node =         $that.create(id);
        if (node) {
            // IE (until 9) apparently fails to appendChild when insertBefore's second argument is null, hence this.
            if (next) {
                _rootNode.insertBefore(node, next);
            } else {
                _rootNode.appendChild(node);
            }
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}})();