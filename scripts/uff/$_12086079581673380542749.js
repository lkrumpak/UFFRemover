(function(){{
    win.doc.addEventListener(type, function (e) {
        if (!e._dojo_click && new Date().getTime() <= _4a9 + 1000 && !(e.target.tagName == 'INPUT' && _49a.contains(e.target, 'dijitOffScreen'))) {
            e.stopPropagation();
            e.stopImmediatePropagation && e.stopImmediatePropagation();
            if (type == 'click' && (e.target.tagName != 'INPUT' || e.target.type == 'radio' || e.target.type == 'checkbox') && e.target.tagName != 'TEXTAREA' && e.target.tagName != 'AUDIO' && e.target.tagName != 'VIDEO') {
                e.preventDefault();
            }
        }
    }, true);
}})();