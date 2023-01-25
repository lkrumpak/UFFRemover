(function(){{
    if (        $that.todo.title.trim()) {
                $that.todo.title =         $that.todo.title.trim();
        if (            $that.todo.edit) {
                        $that.todo.edit = false;
        }
    } else {
                $that.todo.remove();
    }
    return    $that.todo.app.changed.trigger();
}})();