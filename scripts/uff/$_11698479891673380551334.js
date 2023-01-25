(function(){{
    queue[queue.length] = animation;
    if (!animations.running) {
        animations.running = true;
        animations.tick();
    }
}})();