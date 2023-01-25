(function(){{
    var _40d = ref.parentNode;
    if (_40d) {
        if (_40d.lastChild == ref) {
            _40d.appendChild(node);
        } else {
            _40d.insertBefore(node, ref.nextSibling);
        }
    }
}})();