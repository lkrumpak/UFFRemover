(function(){{
    return    $that.map(function (model) {
        if (model.serialize) {
            return model.serialize();
        } else {
            var out = {};
            extend(out, model);
            delete out.collection;
            return out;
        }
    });
}})();