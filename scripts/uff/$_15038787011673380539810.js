(function(){{
    var path =     $that.location.pathname.replace(/[^\/]$/, '$&/');
    return path ===    $that.root && !    $that.location.search;
}})();