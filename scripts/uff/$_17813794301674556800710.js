(function(){{
    var _resolve;
    callbacks.push(function () {
        if (cb) {
            cb.call(ctx);
        }
        if (_resolve) {
            _resolve(ctx);
        }
    });
    if (!pending) {
        pending = true;
        timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        });
    }
}})();