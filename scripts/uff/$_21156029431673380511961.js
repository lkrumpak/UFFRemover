(function(){{
    var def = $view.cached[id] = new can.Deferred().resolve(function (data, helpers) {
        return renderer.call(data, data, helpers);
    });
    function frag() {
        return $view.frag(renderer.apply(this, arguments));
    }
    // expose the renderer for mustache
    frag.render = renderer;
    // set cache references (otherwise preloaded recursive views won't recurse properly)
    def.__view_id = id;
    $view.cachedRenderers[id] = renderer;
    return frag;
}})();