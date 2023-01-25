(function(){{
    if (!text) {
        // Return a nameless renderer
        var renderer = function () {
            return $view.frag(renderer.render.apply(this, arguments));
        };
        renderer.render = function () {
            var renderer = info.renderer(null, id);
            return renderer.apply(renderer, arguments);
        };
        return renderer;
    }
    return $view.preload(id, info.renderer(id, text));
}})();