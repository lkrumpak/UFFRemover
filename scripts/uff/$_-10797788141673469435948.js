(function(){{
    var obj =     $that._wrapped;
    method.apply(obj, arguments);
    if ((name === 'shift' || name === 'splice') && obj.length === 0)
        delete obj[0];
    return result(    $that, obj);
}})();