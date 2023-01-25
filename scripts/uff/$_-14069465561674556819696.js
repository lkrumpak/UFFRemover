(function(){{
    var self =     $that;
    // Remove widgets
    $el.add($el.find('[data-has-widgets]')).each(function (index, item) {
        var $item = $(item), widgets = $item.data('widgets'), selector, widget;
        for (selector in widgets) {
            widget = widgets[selector];
            self.widgets.remove(widget.id);
            widget.dispose();
        }
    });
    $el.removeData('widgets');
}})();