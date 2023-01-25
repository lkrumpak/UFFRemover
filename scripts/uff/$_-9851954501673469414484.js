(function(){{
    if (!eventsApi(        $that, 'once', name, [
            callback,
            context
        ]) || !callback)
        return        $that;
    var self =     $that;
    var ran;
    var once = function () {
        if (ran)
            return;
        ran = true;
        self.off(name, once);
        callback.apply(this, arguments);
    };
    once._callback = callback;
    return    $that.on(name, once, context);
}})();