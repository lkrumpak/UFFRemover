(function(){{
    var text = '', ch = node.childNodes;
    for (var i = 0, n; n = ch[i]; i++) {
        if (n.nodeType != 8) {
            if (n.nodeType == 1) {
                text += _3fb(n);
            } else {
                text += n.nodeValue;
            }
        }
    }
    return text;
}})();