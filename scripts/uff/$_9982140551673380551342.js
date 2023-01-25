(function(){{
    var itemMatches =     $that._isComponentQuery ? !    $that.selector || item.name ===    $that.selector : matches(item.node,     $that.selector);
    if (itemMatches) {
                $that.push(item.node || item.instance);
        if (!noDirty) {
                        $that._makeDirty();
        }
        return true;
    }
}})();