(function(){{
    _411 = dom.byId(_411);
    if (typeof node == 'string') {
        node = /^\s*</.test(node) ? _400.toDom(node, _411.ownerDocument) : dom.byId(node);
    }
    if (typeof _412 == 'number') {
        var cn = _411.childNodes;
        if (!cn.length || cn.length <= _412) {
            _411.appendChild(node);
        } else {
            _40a(node, cn[_412 < 0 ? 0 : _412]);
        }
    } else {
        switch (_412) {
        case 'before':
            _40a(node, _411);
            break;
        case 'after':
            _40c(node, _411);
            break;
        case 'replace':
            _411.parentNode.replaceChild(node, _411);
            break;
        case 'only':
            _400.empty(_411);
            _411.appendChild(node);
            break;
        case 'first':
            if (_411.firstChild) {
                _40a(node, _411.firstChild);
                break;
            }
        default:
            _411.appendChild(node);
        }
    }
    return node;
}})();