(function(){{
    var item =     $that.items[id];
    if (item) {
        _rootNode.removeChild(item);
        delete        $that.items[id];
        _removeObserversForId(id);
        return true;
    } else {
        return false;
    }
}})();