(function(){{
    if (!Backbone.$)
        throw new Error('You must either include jQuery or override Backbone.ajax (Google Backbone.NativeAjax)');
    return Backbone.$.ajax.apply(Backbone.$, arguments);
}})();