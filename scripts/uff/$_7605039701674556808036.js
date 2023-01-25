(function(){{
    if (node.firstChild) {
        _415(node);
    }
    if (_417) {
        has('ie') && _417.canHaveChildren && 'removeNode' in node ? node.removeNode(false) : _417.removeChild(node);
    }
}})();