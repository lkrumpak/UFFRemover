(function(){{
    atts =     $that.constructor.fromJSON(atts);
    if (atts.id &&        $that.id !== atts.id) {
                $that.changeID(atts.id);
    }
        $that.constructor.irecords[    $that.id].load(atts);
        $that.trigger('refresh',     $that);
        $that.trigger('change',     $that, 'refresh');
    return    $that;
}})();