(function(){{
    return _.find(    $that.views, function (view) {
        return model === view.model;
    });
}})();