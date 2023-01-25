(function(){{
    options = options || {};
        $that.collection.each(function (model) {
        this._addViewForModel(model, this, _.extend(options, { rerender: true }));
    },     $that);
}})();