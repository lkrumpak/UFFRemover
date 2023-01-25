(function(){{
    // Don't dispose of any views that are currently displayed
    //flush individual cacheKey
    if (cacheKey) {
                $that.pageViews.remove(cacheKey);
    } else {
        var i = -1, layer;
        while (!!(layer =             $that.layers[++i])) {
            if (layer.cacheKey) {
                                $that.pageViews.remove(layer.cacheKey);
            }
        }
                $that.pageViews.dispose();
                $that.pageViews = new Cache();
    }
}})();