(function(){{
    var base = _.result(    $that, 'urlRoot') || _.result(    $that.collection, 'url') || urlError();
    if (        $that.isNew())
        return base;
    var id =     $that.get(    $that.idAttribute);
    return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
}})();