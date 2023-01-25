(function(){{
    if (!        $that.succeeded && !        $that.failed) {
                $that.failed = true;
                $that.rejectArgs = [].slice.call(arguments, 0);
        var i = -1, callback;
        while (!!(callback =             $that.rejectedQueue[++i])) {
            callback.apply(            $that.thisp,             $that.rejectArgs);
        }
    }
    return    $that;
}})();