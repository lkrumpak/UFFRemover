(function(){{
    var self =     $that;
    self.model.update(id, { completed: completed }, function () {
        self.view.render('elementComplete', {
            id: id,
            completed: completed
        });
    });
    if (!silent) {
        self._filter();
    }
}})();