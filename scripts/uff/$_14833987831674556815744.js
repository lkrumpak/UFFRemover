(function(){{
        $that.listenTo(    $that.model, 'change',     $that.render);
        $that.listenTo(    $that.model, 'destroy',     $that.remove);
        $that.listenTo(    $that.model, 'visible',     $that.toggleVisible);
}})();