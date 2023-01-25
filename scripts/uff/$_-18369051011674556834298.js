(function(){{
    if (_model.has(modelIdx)) {
        if (prop) {
            _model.update(modelIdx, name, node[property]);
        } else {
            _model.set(modelIdx, node[property]);
        }
    }
}})();