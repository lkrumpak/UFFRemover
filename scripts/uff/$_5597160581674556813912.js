(function(){{
    var self =     $that;
    self.model.read({ completed: true }, function (data) {
        self.view.render('showEntries', data);
    });
}})();