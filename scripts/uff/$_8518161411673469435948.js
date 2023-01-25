(function(){{
    var args = [        $that._wrapped];
    push.apply(args, arguments);
    return result(    $that, func.apply(_, args));
}})();