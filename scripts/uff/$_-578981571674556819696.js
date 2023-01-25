(function(){{
    var childViewSearch, self =         $that;
    // Remove child views
    childViewSearch = $el.find('[data-view-id]');
    if ($el !== self.el && $el.is('[data-view-id]')) {
        childViewSearch = childViewSearch.add($el);
    }
    childViewSearch.each(function (index, item) {
        var $item = $(item), childView = $item.data('view');
        self.childViews.remove(childView.id);
        childView.dispose();
    });
}})();