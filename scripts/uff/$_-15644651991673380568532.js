(function(){{
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
}})();