(function(){{
    var handler, listeningToOnce;
    listeningToOnce =     $that.listeningToOnce || (    $that.listeningToOnce = []);
    obj.bind(ev, handler = function () {
        var i, idx, lt, _i, _len;
        idx = -1;
        for (i = _i = 0, _len = listeningToOnce.length; _i < _len; i = ++_i) {
            lt = listeningToOnce[i];
            if (lt.obj === obj) {
                if (lt.ev === ev && lt.callback === handler) {
                    idx = i;
                }
            }
        }
        obj.unbind(ev, handler);
        if (idx !== -1) {
            listeningToOnce.splice(idx, 1);
        }
        return callback.apply(this, arguments);
    });
    listeningToOnce.push({
        obj: obj,
        ev: ev,
        callback: handler
    });
    return    $that;
}})();