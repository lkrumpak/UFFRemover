(function(){{
    var view =     $that._getViewByModel(model);
    if (!view) {
        return;
    }
    var index =     $that.views.indexOf(view);
    if (index !== -1) {
        // remove it if we found it calling animateRemove
        // to give user option of gracefully destroying.
        view =         $that.views.splice(index, 1)[0];
                $that._removeView(view);
    }
}})();