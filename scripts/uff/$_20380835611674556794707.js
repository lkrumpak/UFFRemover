(function(){{
    if (e.which === TodoView.ENTER_KEY &&        $that.input.val().trim()) {
        Todos.create(        $that.newAttributes());
                $that.input.val('');
    }
}})();