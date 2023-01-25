(function(){{
    if (_4a3) {
        _4a2 = dom.isDescendant(win.doc.elementFromPoint(e.changedTouches ? e.changedTouches[0].pageX - win.global.pageXOffset : e.clientX, e.changedTouches ? e.changedTouches[0].pageY - win.global.pageYOffset : e.clientY), _4a4);
    } else {
        _4a2 = _4a2 && (e.changedTouches ? e.changedTouches[0].target : e.target) == _4a4 && Math.abs((e.changedTouches ? e.changedTouches[0].pageX - win.global.pageXOffset : e.clientX) - _4a5) <= _4a7 && Math.abs((e.changedTouches ? e.changedTouches[0].pageY - win.global.pageYOffset : e.clientY) - _4a6) <= _4a8;
    }
}})();