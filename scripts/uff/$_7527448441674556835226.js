(function(){{
    if (prepend) {
        animationPrefilters.unshift(callback);
    } else {
        animationPrefilters.push(callback);
    }
}})();