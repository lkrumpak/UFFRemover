(function(){{
    var i =     $that.getIndexFromEl(e.target);
        $that.todos[i].completed = !    $that.todos[i].completed;
        $that.render();
}})();