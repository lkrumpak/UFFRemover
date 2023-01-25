(function(){{
    var args = [        $that._wrapped];
    push.apply(args, arguments);
    return result.call(    $that, func.apply(_, args));
}})();