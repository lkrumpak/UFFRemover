(function(){{
    type = type.toLowerCase();
    if (has('ie') || has('trident')) {
        if (_3d6 == 'auto') {
            if (type == 'height') {
                return node.offsetHeight;
            }
            if (type == 'width') {
                return node.offsetWidth;
            }
        }
        if (type == 'fontweight') {
            switch (_3d6) {
            case 700:
                return 'bold';
            case 400:
            default:
                return 'normal';
            }
        }
    }
    if (!(type in _3d3)) {
        _3d3[type] = _3d4.test(type);
    }
    return _3d3[type] ? _3c7(node, _3d6) : _3d6;
}})();