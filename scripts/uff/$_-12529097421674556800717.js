(function(){{
    flushing = true;
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) {
        return a.id - b.id;
    });
    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
        var watcher = queue[index];
        var id = watcher.id;
        has$1[id] = null;
        watcher.run();
        // in dev build, check and stop circular updates.
        if ('development' !== 'production' && has$1[id] != null) {
            circular[id] = (circular[id] || 0) + 1;
            if (circular[id] > config._maxUpdateCount) {
                warn('You may have an infinite update loop ' + (watcher.user ? 'in watcher with expression "' + watcher.expression + '"' : 'in a component render function.'), watcher.vm);
                break;
            }
        }
    }
    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
        devtools.emit('flush');
    }
    resetSchedulerState();
}})();