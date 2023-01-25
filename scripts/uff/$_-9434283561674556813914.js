(function(){{
    var self =     $that;
    self.model.read({ completed: true }, function (data) {
        data.forEach(function (item) {
            self.removeItem(item.id);
        });
    });
    self._filter();
}})();