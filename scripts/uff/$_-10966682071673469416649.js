(function(){{
        $that.sort(    $that._isComponentQuery ? sortByItemPosition : sortByDocumentPosition);
        $that._dirty = false;
}})();