(function(){{
    var toggle = el.prop('checked');
        $that.attr('todos').each(function (todo) {
        todo.attr('complete', toggle);
    });
}})();