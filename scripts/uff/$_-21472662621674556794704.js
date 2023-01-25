(function(){{
        $that.$el.html(    $that.template(    $that.model.toJSON())).toggleClass('completed',     $that.model.get('completed'));
        $that.toggleVisible();
        $that.input =     $that.$('.todo-input');
    return    $that;
}})();