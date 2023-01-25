(function(){{
    if (options == null) {
        options = {};
    }
    if (options.clear == null) {
        options.clear = true;
    }
        $that.trigger('beforeDestroy',     $that, options);
        $that.remove(options);
        $that.destroyed = true;
        $that.trigger('destroy',     $that, options);
        $that.trigger('change',     $that, 'destroy', options);
    if (        $that.listeningTo) {
                $that.stopListening();
    }
        $that.unbind();
    return    $that;
}})();