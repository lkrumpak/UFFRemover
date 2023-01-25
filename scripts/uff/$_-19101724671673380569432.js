(function(){{
    var fns = arguments;
    return jQuery.Deferred(function (newDefer) {
        jQuery.each(tuples, function (i, tuple) {
            var fn = jQuery.isFunction(fns[i]) && fns[i];
            // deferred[ done | fail | progress ] for forwarding actions to newDefer
            deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);
                if (returned && jQuery.isFunction(returned.promise)) {
                    returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                } else {
                    newDefer[tuple[0] + 'With'](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                }
            });
        });
        fns = null;
    }).promise();
}})();