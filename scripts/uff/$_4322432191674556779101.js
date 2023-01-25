(function(){{
    var value = can.trim(el.val());
    var TodoModel =     $that.Todo;
    if (value !== '') {
        new TodoModel({
            text: value,
            complete: false
        }).save();
        can.route.removeAttr('filter');
        el.val('');
    }
}})();