(function(){{
    var path =     $that.decodeFragment(    $that.location.pathname +    $that.getSearch()).slice(    $that.root.length - 1);
    return path.charAt(0) === '/' ? path.slice(1) : path;
}})();