(function(){{
    var _4b8 = _4b4(e.target);
    _4a2 = !e.target.disabled && _4b8 && _4b8.dojoClick;
    if (_4a2) {
        _4a3 = _4a2 == 'useTarget';
        _4a4 = _4a3 ? _4b8 : e.target;
        if (_4a3) {
            e.preventDefault();
        }
        _4a5 = e.changedTouches ? e.changedTouches[0].pageX - win.global.pageXOffset : e.clientX;
        _4a6 = e.changedTouches ? e.changedTouches[0].pageY - win.global.pageYOffset : e.clientY;
        _4a7 = (typeof _4a2 == 'object' ? _4a2.x : typeof _4a2 == 'number' ? _4a2 : 0) || 4;
        _4a8 = (typeof _4a2 == 'object' ? _4a2.y : typeof _4a2 == 'number' ? _4a2 : 0) || 4;
        if (!_4a1) {
            _4a1 = true;
            function _4b9(e) {
                if (_4a3) {
                    _4a2 = dom.isDescendant(win.doc.elementFromPoint(e.changedTouches ? e.changedTouches[0].pageX - win.global.pageXOffset : e.clientX, e.changedTouches ? e.changedTouches[0].pageY - win.global.pageYOffset : e.clientY), _4a4);
                } else {
                    _4a2 = _4a2 && (e.changedTouches ? e.changedTouches[0].target : e.target) == _4a4 && Math.abs((e.changedTouches ? e.changedTouches[0].pageX - win.global.pageXOffset : e.clientX) - _4a5) <= _4a7 && Math.abs((e.changedTouches ? e.changedTouches[0].pageY - win.global.pageYOffset : e.clientY) - _4a6) <= _4a8;
                }
            }
            ;
            win.doc.addEventListener(_4b6, function (e) {
                _4b9(e);
                if (_4a3) {
                    e.preventDefault();
                }
            }, true);
            win.doc.addEventListener(_4b7, function (e) {
                _4b9(e);
                if (_4a2) {
                    _4a9 = new Date().getTime();
                    var _4ba = _4a3 ? _4a4 : e.target;
                    if (_4ba.tagName === 'LABEL') {
                        _4ba = dom.byId(_4ba.getAttribute('for')) || _4ba;
                    }
                    var src = e.changedTouches ? e.changedTouches[0] : e;
                    var _4bb = document.createEvent('MouseEvents');
                    _4bb._dojo_click = true;
                    _4bb.initMouseEvent('click', true, true, e.view, e.detail, src.screenX, src.screenY, src.clientX, src.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
                    setTimeout(function () {
                        on.emit(_4ba, 'click', _4bb);
                        _4a9 = new Date().getTime();
                    }, 0);
                }
            }, true);
            function _4bc(type) {
                win.doc.addEventListener(type, function (e) {
                    if (!e._dojo_click && new Date().getTime() <= _4a9 + 1000 && !(e.target.tagName == 'INPUT' && _49a.contains(e.target, 'dijitOffScreen'))) {
                        e.stopPropagation();
                        e.stopImmediatePropagation && e.stopImmediatePropagation();
                        if (type == 'click' && (e.target.tagName != 'INPUT' || e.target.type == 'radio' || e.target.type == 'checkbox') && e.target.tagName != 'TEXTAREA' && e.target.tagName != 'AUDIO' && e.target.tagName != 'VIDEO') {
                            e.preventDefault();
                        }
                    }
                }, true);
            }
            ;
            _4bc('click');
            _4bc('mousedown');
            _4bc('mouseup');
        }
    }
}})();