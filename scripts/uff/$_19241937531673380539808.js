(function(){{
    if (!eventsApi(        $that, 'once', name, [
            callback,
            context
        ]) || !callback)
        return        $that;
    var self =     $that;
    var once = _.once(function () {
        self.off(name, once);
        callback.apply(this, arguments);
    });
    once._callback = callback;
    return    $that.on(name, once, context);
}})();