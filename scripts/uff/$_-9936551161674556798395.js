(function(){{
    var ids = err.requireModules, notified = false;
    if (errback) {
        errback(err);
    } else {
        each(ids, function (id) {
            var mod = getOwn(registry, id);
            if (mod) {
                //Set error on module, so it skips timeout checks.
                mod.error = err;
                if (mod.events.error) {
                    notified = true;
                    mod.emit('error', err);
                }
            }
        });
        if (!notified) {
            req.onError(err);
        }
    }
}})();