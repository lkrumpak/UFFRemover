(function(){{
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || 'fx';
    return    $that.queue(type, function (next, hooks) {
        var timeout = setTimeout(next, time);
        hooks.stop = function () {
            clearTimeout(timeout);
        };
    });
}})();