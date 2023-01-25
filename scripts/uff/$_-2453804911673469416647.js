(function(){{
    var self =     $that;
    if (!        $that.proxies[keypath]) {
                $that.proxies[keypath] = {
            update: function () {
                self.reallyUpdate(keypath);
            }
        };
    }
    return    $that.proxies[keypath];
}})();