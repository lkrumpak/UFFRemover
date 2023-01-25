(function(){{
    var bound = _.bind(handler,     $that);
        $that.listenTo(object, events, bound);
    bound();
}})();