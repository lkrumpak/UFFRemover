(function(){{
    var self =     $that;
    if (title.trim() === '') {
        return;
    }
    self.model.create(title, function () {
        self.view.render('clearNewTodo');
        self._filter(true);
    });
}})();