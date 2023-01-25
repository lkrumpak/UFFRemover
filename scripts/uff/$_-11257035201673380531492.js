(function(){{
    var handler;
    return    $that.bind(ev, handler = function () {
        this.unbind(ev, handler);
        return callback.apply(this, arguments);
    });
}})();