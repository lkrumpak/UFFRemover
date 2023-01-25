(function(){{
    if (        $that === model.collection)
        delete model.collection;
    model.off('all',     $that._onModelEvent,     $that);
}})();