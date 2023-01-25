(function(){{
    var checked = !!node.checked;
    model.loop(function (value, idx) {
        this.update(idx, 'completed', checked);
    }, model);
}})();