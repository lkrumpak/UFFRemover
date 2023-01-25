(function(){{
    if (        $that.model) {
                $that.clearModelEvents();
    }
    if (        $that.childViews.count()) {
                $that.disposeChildViews(        $that.el);
    }
    if (        $that.widgets.count()) {
                $that.disposeWidgets(        $that.el);
    }
    // Do not dispose of template or model
        $that.template =     $that.model =     $that.parentView = null;
    EventDispatcher.prototype.dispose.apply(    $that, arguments);
}})();