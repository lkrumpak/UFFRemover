(function(){{
    var self =     $that;
    self.model.remove(id, function () {
        self.view.render('removeItem', id);
    });
    self._filter();
}})();