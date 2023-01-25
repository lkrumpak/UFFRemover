(function(){{
    var self =     $that;
    Connectivity.ajax({
        async: false,
        url: url,
        success: function (resp) {
            self.process(resp);
        }
    });
}})();