(function(){{
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}})();