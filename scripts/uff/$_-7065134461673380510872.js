(function(){{
    var self = set.eq(index);
    if (isFunction) {
        args[0] = value.call(        $that, index, self.html());
    }
    self.domManip(args, callback);
}})();