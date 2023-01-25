(function(){{
    var view = new    $that.view(_({
        model: model,
        collection:         $that.collection
    }).extend(    $that.viewOptions));
        $that.views.push(view);
    view.parent =     $that;
    view.renderedByParentView = true;
    view.render();
    return view;
}})();