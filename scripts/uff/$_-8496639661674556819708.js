(function(){{
    if (stop.time - start.time < $.event.special.swipe.durationThreshold && Math.abs(start.coords[0] - stop.coords[0]) > $.event.special.swipe.horizontalDistanceThreshold && Math.abs(start.coords[1] - stop.coords[1]) < $.event.special.swipe.verticalDistanceThreshold) {
        start.origin.trigger('swipe').trigger(start.coords[0] > stop.coords[0] ? 'swipeleft' : 'swiperight');
    }
}})();