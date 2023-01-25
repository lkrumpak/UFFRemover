(function(){{
    var self =     $that;
    self.model.read(id, function (data) {
        self.view.render('editItemDone', {
            id: id,
            title: data[0].title
        });
    });
}})();