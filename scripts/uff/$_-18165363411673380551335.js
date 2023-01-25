(function(){{
    var key;
        $that.startTime = Date.now();
    for (key in options) {
        if (options.hasOwnProperty(key)) {
                        $that[key] = options[key];
        }
    }
        $that.interpolator = interpolate(    $that.from,     $that.to);
        $that.running = true;
}})();