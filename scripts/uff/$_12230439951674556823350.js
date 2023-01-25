(function(){{
        $that.classNameQueue.push(className);
    if (!        $that.timeout) {
                $that.timeout = setTimeout(        $that.flushClassNameQueue, TICK);
    }
}})();