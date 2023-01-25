(function(){{
        $that.render = bind(    $that.render,     $that);
    Todos.__super__.constructor.apply(    $that, arguments);
        $that.todo.bind('update',     $that.render);
        $that.todo.bind('destroy',     $that.release);
}})();