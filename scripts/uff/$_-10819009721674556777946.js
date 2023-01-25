(function(){{
    if (        $that.isNew()) {
        var self =         $that;
        var def = can.Deferred();
        def.then(success, error);
        return def.done(function (data) {
            self.destroyed(data);
        }).resolve(self);
    }
    return makeRequest(    $that, 'destroy', success, error, 'destroyed');
}})();