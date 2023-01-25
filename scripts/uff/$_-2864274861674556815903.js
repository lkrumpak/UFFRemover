(function(){{
    if (e.which !== ENTER_KEY || !        $that.input.value.trim()) {
        return;
    }
    app.todos.create(    $that.newAttributes());
        $that.input.value = '';
}})();