(function(){{
    if (!isString(target) && !isElement(target) || !isFunction(watcher)) {
        return;
    }
        $that.watchers.put(target, watcher);
}})();