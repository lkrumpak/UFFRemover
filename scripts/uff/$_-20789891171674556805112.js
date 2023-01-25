(function(){{
    var self =     $that;
    _.each(_.keys(    $that.attributes), function (key) {
        self.unset(key, options);
    });
    return    $that;
}})();