(function(){{
    if (e.which === ENTER_KEY &&        $that.$input.val().trim()) {
        app.todos.create(        $that.newAttributes());
                $that.$input.val('');
    }
}})();