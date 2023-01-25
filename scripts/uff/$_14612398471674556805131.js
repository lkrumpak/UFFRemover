(function(){{
    var newViews =     $that.collection.map(    $that._getOrCreateByModel,     $that);
    //Remove existing views from the ui
    var toRemove = _.difference(    $that.views, newViews);
    toRemove.forEach(    $that._removeView,     $that);
    //Rerender the full list with the new views
        $that.views = newViews;
        $that._rerenderAll();
}})();