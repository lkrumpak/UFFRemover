(function(){{
    var $el = $(item), childView;
    if (!$el.data('view')) {
        childView = new o.TView($el, o.model || self.model, self);
        cache.set(childView.id, childView);
    }
}})();