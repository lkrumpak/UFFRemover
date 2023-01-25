(function(){{
    var self =     $that;
    self.model.read({ completed: false }, function (data) {
        self.view.render('showEntries', data);
    });
}})();