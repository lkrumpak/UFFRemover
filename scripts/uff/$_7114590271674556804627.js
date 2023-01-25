(function(){{
    var $input = $(e.target);
    var val = $input.val().trim();
    if (e.which !== ENTER_KEY || !val) {
        return;
    }
        $that.todos.push({
        id: util.uuid(),
        title: val,
        completed: false
    });
    $input.val('');
        $that.render();
}})();