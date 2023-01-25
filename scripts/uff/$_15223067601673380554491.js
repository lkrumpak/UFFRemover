(function(){{
    var i = -1, model;
    while (!!(model =         $that.models[++i])) {
                $that.remove(model);
    }
        $that.changedOrder = false;
        $that.addedItems.length =     $that.removedItems.length =     $that.changedItems.length =     $that.models.length = 0;
}})();