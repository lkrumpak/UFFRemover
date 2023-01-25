(function(){{
    var thisObject =         $that, $this = $(thisObject), scrolling, timer;
    function trigger(event, state) {
        scrolling = state;
        triggerCustomEvent(thisObject, scrolling ? 'scrollstart' : 'scrollstop', event);
    }
    // iPhone triggers scroll after a small delay; use touchmove instead
    $this.bind(scrollEvent, function (event) {
        if (!$.event.special.scrollstart.enabled) {
            return;
        }
        if (!scrolling) {
            trigger(event, true);
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
            trigger(event, false);
        }, 50);
    });
}})();