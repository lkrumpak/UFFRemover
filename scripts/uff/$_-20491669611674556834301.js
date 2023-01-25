(function(){{
        $that.addEventListener(node, name, function (event) {
        if (matchesSelector(event.target, selector)) {
            _parent[listener].call(_parent, event, node);
        }
    }, !!useCapture);
}})();