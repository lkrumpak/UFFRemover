(function(){{
    var args = slice.call(arguments);
    args.unshift(    $that[attribute]);
    return _[method].apply(_, args);
}})();