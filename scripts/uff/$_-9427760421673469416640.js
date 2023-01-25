(function(){{
    var i = queue.length, animation;
    while (i--) {
        animation = queue[i];
        if (animation.root === root && animation.keypath === keypath) {
            animation.stop();
        }
    }
}})();