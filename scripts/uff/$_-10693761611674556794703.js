(function(){{
    //... is a list tag.
        $that.tagName = 'li';
    // The DOM events specific to an item.
        $that.events = {
        'click .check': 'toggleDone',
        'dblclick label.todo-content': 'edit',
        'click button.destroy': 'clear',
        'keypress .edit': 'updateOnEnter',
        'keydown .edit': 'revertOnEscape',
        'blur .edit': 'close'
    };
    _super.call(    $that, options);
    // Cache the template function for a single item.
        $that.template = _.template($('#item-template').html());
    _.bindAll(    $that, 'render', 'close', 'remove', 'toggleVisible');
        $that.model.bind('change',     $that.render);
        $that.model.bind('destroy',     $that.remove);
        $that.model.bind('visible',     $that.toggleVisible);
}})();