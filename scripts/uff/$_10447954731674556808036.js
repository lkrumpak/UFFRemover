(function(){{
    if ('innerHTML' in node) {
        try {
            node.innerHTML = '';
            return;
        } catch (e) {
        }
    }
    for (var c; c = node.lastChild;) {
        node.removeChild(c);
    }
}})();