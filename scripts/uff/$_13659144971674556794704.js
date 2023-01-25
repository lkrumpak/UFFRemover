(function(){{
    var completed =     $that.model.get('completed');
    var hidden = taskFilter === 'completed' && !completed || taskFilter === 'active' && completed;
        $that.$el.toggleClass('hidden', hidden);
}})();