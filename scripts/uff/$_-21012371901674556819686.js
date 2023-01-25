(function(){{
    var promise = new Promise(), origSuccess = opts.success, origError = opts.error;
    opts.success = function () {
        if (origSuccess) {
            origSuccess.apply(this, arguments);
        }
        promise.resolve.apply(promise, arguments);
    };
    opts.error = function () {
        if (origError) {
            origError.apply(this, arguments);
        }
        promise.reject.apply(promise, arguments);
    };
    if (Connectivity.isOffline()) {
        promise.reject(_offlineErrorCode);
    } else {
        $.ajax(opts);
    }
    promise.error(_onAjaxError);
    return promise;
}})();