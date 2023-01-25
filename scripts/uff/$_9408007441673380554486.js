(function(){{
    if (typeof layer === 'number') {
                $that.dismissLayersAbove(layer - 1);
    } else if (layer instanceof PageView) {
                $that.dismiss(layer.layer);
    } else {
        layer = $(layer);
        var index = layer.attr('data-layer-index');
        if (index === null) {
            layer = layer.closest('[data-layer-index]');
            index = layer.attr('data-layer-index');
        }
        if (index !== null) {
                        $that.dismiss(Number(index));
        }
    }
}})();