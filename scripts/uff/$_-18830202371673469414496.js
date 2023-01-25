(function(){{
    if (!Backbone.$)
        throw new Error('You must either include jQuery or override Backbone.View.prototype methods (Google Backbone.NativeView)');
        $that.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
        $that.el =     $that.$el[0];
}})();