(function(){{
    var thisObject =         $that, $this = $(thisObject);
    $this.bind(touchStartEvent, function (event) {
        var start = $.event.special.swipe.start(event), stop;
        function moveHandler(event) {
            if (!start) {
                return;
            }
            stop = $.event.special.swipe.stop(event);
            // prevent scrolling
            if (Math.abs(start.coords[0] - stop.coords[0]) > $.event.special.swipe.scrollSupressionThreshold) {
                event.preventDefault();
            }
        }
        $this.bind(touchMoveEvent, moveHandler).one(touchStopEvent, function () {
            $this.unbind(touchMoveEvent, moveHandler);
            if (start && stop) {
                $.event.special.swipe.handleSwipe(start, stop);
            }
            start = stop = undefined;
        });
    });
}})();