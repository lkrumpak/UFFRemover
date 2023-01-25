(function(){{
        $that._index(model);
    if (!model.collection)
        model.collection =         $that;
    if (model.on)
        model.on('all',         $that._onModelEvent,         $that);
}})();