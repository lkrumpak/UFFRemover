(function(){{
    var id = watcher.id;
    if (has$1[id] == null) {
        has$1[id] = true;
        if (!flushing) {
            queue.push(watcher);
        } else {
            // if already flushing, splice the watcher based on its id
            // if already past its id, it will be run next immediately.
            var i = queue.length - 1;
            while (i >= 0 && queue[i].id > watcher.id) {
                i--;
            }
            queue.splice(Math.max(i, index) + 1, 0, watcher);
        }
        // queue the flush
        if (!waiting) {
            waiting = true;
            nextTick(flushSchedulerQueue);
        }
    }
}})();