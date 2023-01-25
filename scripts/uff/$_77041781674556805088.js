(function(){{
    if (        $that === model.collection)
        delete model.collection;
        $that._deIndex(model);
    if (model.off)
        model.off('all',         $that._onModelEvent,         $that);
}})();