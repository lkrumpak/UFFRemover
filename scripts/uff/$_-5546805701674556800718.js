(function(){{
    /* istanbul ignore else */
    if (        $that.lazy) {
                $that.dirty = true;
    } else if (        $that.sync) {
                $that.run();
    } else {
        queueWatcher(        $that);
    }
}})();