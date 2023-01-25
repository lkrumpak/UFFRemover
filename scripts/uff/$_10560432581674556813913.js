(function(){{
    var self =     $that;
    self.model.read(id, function (data) {
        self.view.render('editItem', {
            id: id,
            title: data[0].title
        });
    });
}})();