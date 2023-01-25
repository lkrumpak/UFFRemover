(function(){{
    var self =         $that, length =         $that.scope.length;
    if (path.source) {
        path = path.source.replace(/\\\//ig, '/');
    }
    path = path.split(new RegExp(    $that.delimiter));
    path = terminator(path,     $that.delimiter);
        $that.scope =     $that.scope.concat(path);
    routesFn.call(    $that,     $that);
        $that.scope.splice(length, path.length);
}})();