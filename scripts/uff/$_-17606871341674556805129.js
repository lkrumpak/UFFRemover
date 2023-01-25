(function(){{
    var parsedBindings =     $that._parsedBindings;
    if (        $that.el &&        $that.el.parentNode)
                $that.el.parentNode.removeChild(        $that.el);
    if (        $that._subviews)
        _.chain(        $that._subviews).flatten().invoke('remove');
        $that.stopListening();
    // TODO: Not sure if this is actually necessary.
    // Just trying to de-reference this potentially large
    // amount of generated functions to avoid memory leaks.
    _.each(parsedBindings, function (properties, modelName) {
        _.each(properties, function (value, key) {
            delete parsedBindings[modelName][key];
        });
        delete parsedBindings[modelName];
    });
        $that.trigger('remove',     $that);
    return    $that;
}})();