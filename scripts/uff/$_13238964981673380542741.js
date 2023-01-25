(function(){{
    _378 = lang.hitch(_377, _378);
    if (!obj || !(obj.addEventListener || obj.attachEvent)) {
        return _371.after(obj || dojo.global, _376, _378, true);
    }
    if (typeof _376 == 'string' && _376.substring(0, 2) == 'on') {
        _376 = _376.substring(2);
    }
    if (!obj) {
        obj = dojo.global;
    }
    if (!_379) {
        switch (_376) {
        case 'keypress':
            _376 = _37a;
            break;
        case 'mouseenter':
            _376 = _373.enter;
            break;
        case 'mouseleave':
            _376 = _373.leave;
            break;
        }
    }
    return on(obj, _376, _378, _379);
}})();