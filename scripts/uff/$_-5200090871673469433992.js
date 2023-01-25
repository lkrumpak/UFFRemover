(function(){{
    var handle =     $that.watch(topic, function () {
        callback.apply(scope, arguments);
        this.unwatch(handle);
    },     $that);
    return handle;
}})();