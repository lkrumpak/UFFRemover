(function(){{
    if (!query)
        return;
    var index =     $that._indexes[indexName ||    $that.mainIndex];
    return index[query] || index[query[    $that.mainIndex]] ||    $that._indexes.cid[query.cid];
}})();