(function(){{
    curr = new Date().getTime();
    diff = curr - lastCall;
    if (diff >= throttle) {
        lastCall = curr;
        $(        $that).trigger('throttledresize');
    } else {
        if (heldCall) {
            clearTimeout(heldCall);
        }
        // Promise a held call will still execute
        heldCall = setTimeout(handler, throttle - diff);
    }
}})();