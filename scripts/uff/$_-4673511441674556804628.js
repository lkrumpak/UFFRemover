(function(){{
    var el = e.target;
    var $el = $(el);
    var val = $el.val().trim();
    if (!val) {
                $that.destroy(e);
        return;
    }
    if ($el.data('abort')) {
        $el.data('abort', false);
    } else {
                $that.todos[        $that.getIndexFromEl(el)].title = val;
    }
        $that.render();
}})();