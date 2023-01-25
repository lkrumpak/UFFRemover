(function(){{
    var self =     $that;
    title = title.trim();
    if (title.length !== 0) {
        self.model.update(id, { title: title }, function () {
            self.view.render('editItemDone', {
                id: id,
                title: title
            });
        });
    } else {
        self.removeItem(id);
    }
}})();