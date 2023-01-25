(function(){{
    var i, animation;
    for (i = 0; i < queue.length; i += 1) {
        animation = queue[i];
        if (!animation.tick()) {
            queue.splice(i--, 1);
        }
    }
    if (queue.length) {
        rAF(animations.tick);
    } else {
        animations.running = false;
    }
}})();