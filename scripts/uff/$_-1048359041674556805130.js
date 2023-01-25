(function(){{
    var view =     $that._getViewByModel(model);
    var matches =     $that.filter ?     $that.filter(model) : true;
    if (!matches) {
        return;
    }
    if (!view) {
        view = new        $that.view(_({
            model: model,
            collection:             $that.collection
        }).extend(        $that.viewOptions));
                $that.views.push(view);
        view.parent =         $that;
        view.renderedByParentView = true;
        view.render({ containerEl:             $that.el });
    }
    if (options && options.rerender) {
                $that._insertView(view);
    } else {
                $that._insertViewAtIndex(view);
    }
}})();