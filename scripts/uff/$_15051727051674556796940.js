(function(){{
        $that.trigger('release',     $that);
        $that.el.remove();
        $that.unbind();
    return    $that.stopListening();
}})();