(function(){{
    var value = can.trim(el.val());
    if (value === '') {
        todo.destroy();
    } else {
        todo.attr({
            editing: false,
            text: value
        });
    }
}})();