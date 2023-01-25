(function(){{
    if (forceCaptureEvents.indexOf(type) !== -1)
        capture = true;
    event.unbind(el, type, fn, capture);
}})();