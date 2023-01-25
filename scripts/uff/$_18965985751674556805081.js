(function(){{
    var val =     $that.mainInput.value.trim();
    if (e.which === ENTER_KEY && val) {
        app.me.todos.add({ title: val });
                $that.mainInput.value = '';
    }
}})();