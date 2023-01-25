(function(){{
    if (_model.has(id)) {
        var newNode = _node.cloneNode(true), nodes = getNodes(newNode);
        toArray(nodes).forEach(function (child) {
            child.setAttribute('data-' + _plugins.name + '_id', id);
        });
                $that.items[id] = newNode;
        _plugins.apply(newNode);
        return newNode;
    }
}})();