(function(){{
        $that.exitingPageViews.push(layer);
    promise.when(layer.exit(    $that.el,     $that.enteringPageViews)).success(function () {
        delay(function () {
            ArrayUtils.remove(this.exitingPageViews, layer);
            if (!layer.cacheKey || exceptForView && exceptForView.cacheKey === layer.cacheKey) {
                layer.dispose();
            }
        }, this);
    });
        $that.layers[i] = null;
}})();