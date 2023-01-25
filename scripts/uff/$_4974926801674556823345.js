(function(){{
    if ('value' in        $that._root) {
        return        $that._root.value;
    }
    return    $that._root[getTextContentAccessor()];
}})();