(function(){{
    var _4c0 = lang.delegate(evt, { bubbles: true });
    if (has('ios') >= 6) {
        _4c0.touches = evt.touches;
        _4c0.altKey = evt.altKey;
        _4c0.changedTouches = evt.changedTouches;
        _4c0.ctrlKey = evt.ctrlKey;
        _4c0.metaKey = evt.metaKey;
        _4c0.shiftKey = evt.shiftKey;
        _4c0.targetTouches = evt.targetTouches;
    }
    return _4c0;
}})();