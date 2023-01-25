(function(){{
    var path = decodeURI(    $that.location.pathname +    $that.location.search);
    var root =     $that.root.slice(0, -1);
    if (!path.indexOf(root))
        path = path.slice(root.length);
    return path.slice(1);
}})();