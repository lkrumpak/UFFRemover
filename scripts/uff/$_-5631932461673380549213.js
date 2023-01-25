(function(){{
    var base = _.result(    $that, 'urlRoot') || _.result(    $that.collection, 'url') || urlError();
    if (        $that.isNew())
        return base;
    return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(    $that.id);
}})();