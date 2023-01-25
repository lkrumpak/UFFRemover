(function(){{
    // Backbone LocalStorage is adding `id` attribute instantly after
    // creating a model.  This causes our TodoView to render twice. Once
    // after creating a model and once on `id` change.  We want to
    // filter out the second redundant render, which is caused by this
    // `id` change.  It's known Backbone LocalStorage bug, therefore
    // we've to create a workaround.
    // https://github.com/tastejs/todomvc/issues/469
    if (        $that.model.changed.id !== undefined) {
        return;
    }
        $that.$el.html(    $that.template(    $that.model.toJSON()));
        $that.$el.toggleClass('completed',     $that.model.get('completed'));
        $that.toggleVisible();
        $that.$input =     $that.$('.edit');
    return    $that;
}})();