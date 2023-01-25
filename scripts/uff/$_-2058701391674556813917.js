(function(){{
    var self =     $that;
    self.model.read({ completed: !completed }, function (data) {
        data.forEach(function (item) {
            self.toggleComplete(item.id, completed, true);
        });
    });
    self._filter();
}})();